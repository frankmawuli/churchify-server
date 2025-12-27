import { Request, Response } from "express";
import prisma from "../Libs/prisma";
import bcrypt from "bcryptjs";
import { generateAccessToken, generateRefreshToken } from "../Libs/jwt";
import sendOtp from "../Libs/otp";

//create a new user
export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Email, password, role, and userType are required" });
  }
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        userType: "PASSWORD",
      },
    });
    await sendOtp({
      email: newUser.email,
      subject: "Verify your email for Churchify",
    });
    return res.status(201).json({
      message: "User created successfully",
      user: {
        userId: newUser.id,
        email: newUser.email,
        role: newUser.role,
        userType: newUser.userType,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", details: error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ message: "User does not exist " });
    }
    if (!user.password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const accessToken = generateAccessToken(
      {
        id: user.id,
        email: user.email,
        name: user.role || "",
      },
      res
    );

    const refreshToken = await generateRefreshToken({
      id: user.id,
      email: user.email,
      name: user.role || "",
    });

    //update number of logins
    await prisma.user.update({
      where: { id: user.id },
      data: { numberOfLogins: { increment: 1 } },
    });

    return res.status(200).json({
      message: "Login successful",
      user: {
        userId: user.id,
        email: user.email,
        name: user.role,
        numberOfLogins: user.numberOfLogins,
        // Add other non-sensitive fields as needed
      },
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", details: error });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const user_id = req.body?.user_id || req.query?.user_id;
  const newPassword = req.body?.newPassword || req.body?.password;

  if (!user_id || !newPassword) {
    return res
      .status(400)
      .json({ message: "user_id and newPassword are required." });
  }

  try {
    const userExists = await prisma.user.findUnique({
      where: { id: user_id },
    });
    if (!userExists) {
      return res.status(404).json({ message: "User does not exist." });
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: user_id },
      data: { password: passwordHash },
    });

    return res
      .status(200)
      .json({ message: "Password has been reset successfully." });
  } catch (error) {
    console.error("Error resetting password:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
