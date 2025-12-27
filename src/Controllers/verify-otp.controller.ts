import { generateAccessToken } from "../Libs/jwt";
import prisma from "../Libs/prisma";
//verify otp
import { Request, Response } from "express";

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otpCode } = req.body;

  // Validate OTP code format: must be a 6-digit numeric string
  if (typeof otpCode !== "string" || !/^\d{6}$/.test(otpCode)) {
    return res.status(400).json({ message: "Invalid OTP code format" });
  }
  try {
    const otpRecord = await prisma.otp.findFirst({
      where: { email, otpCode, used: false, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: "desc" },
    });

    if (!otpRecord) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }
    await prisma.otp.update({
      where: { id: otpRecord.id },
      data: { used: true },
    });
    return res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error in verifyOtp:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
