import sendEmail from "../config/resend.config";
import prisma from "../Libs/prisma";
import { otpEmail } from "./emails";

interface OtpPayload {
  email: string;
  subject: string;
}

export default async function sendOtp({ email ,subject }: OtpPayload) {
  const otp = Math.floor(100000 + Math.random() * 900000);
  const expirationTime = new Date(Date.now() + 10 * 60 * 1000);
  await prisma.otp.create({
    data: {
      otpCode: otp.toString(),
      expiresAt: expirationTime,
      email: email,
    },
  });
  await sendEmail({
    email: email,
    subject: subject,
    html: otpEmail().replace("{{OTP_CODE}}", otp.toString()),
  });

  return otp;
}