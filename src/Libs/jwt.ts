import jwt from "jsonwebtoken";
import { Response } from "express";

if (!process.env.JWT_ACCESS_SECRET) {
  throw new Error(
    "Missing JWT_SECRET environment variable. Please set it in your environment."
  );
}

if(!process.env.JWT_REFRESH_SECRET) {
  throw new Error("Missing JWT_REFRESH_SECRET environment variable. Please set it in your environment.");
  
}
interface JwtPayload {
  id: string;
  email: string;
  name: string;
}

const AccessTokenSecret = process.env.JWT_ACCESS_SECRET;
const RefreshTokenSecret = process.env.JWT_REFRESH_SECRET;
import prisma from "./prisma";


// Generate Access Token (shorter life)
export function generateAccessToken(user: JwtPayload, res: Response) {
  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    AccessTokenSecret,
    { expiresIn: "15m" }
  );
   res.cookie("token", token, {
     httpOnly: true,
     secure: true,
     sameSite: "none",
     maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
   });
   return token;
}

// Generate Refresh Token (stored in DB)
export async function generateRefreshToken(user: JwtPayload) {
  const refreshToken = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    RefreshTokenSecret,
    { expiresIn: "7d" }
  );

  await prisma.deviceToken.create({
    data: {
      userId: user.id,
      token: refreshToken,
      platform: "WEB",
      deviceName: "User's Device",
      isActive: true,
    },
  });

  return refreshToken;
}
