import { Request, Response } from "express";
import prisma from "../Libs/prisma";
import sendEmail from "../config/resend.config";
import { sendAniversaryEmail, birthdayEmail } from "../Libs/emails";

export const getMonthlyCelebrations = async (req: Request, res: Response) => {
  const { churchId, month } = req.params;
  const adminId = (req.user as any)?.id;

  if (!churchId) {
    return res.status(400).json({ message: "Church ID is required" });
  }

  if (!adminId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const monthNumber = Number(month);

  if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    return res.status(400).json({ message: "Invalid month parameter" });
  }

  try {
    const year = new Date().getFullYear();

    const startDate = new Date(year, monthNumber - 1, 1);
    const endDate = new Date(year, monthNumber, 0, 23, 59, 59);

    // 🎂 Birthdays
    const birthdayCelebrants = await prisma.membershipProfile.findMany({
      where: {
        churchId,
        addedBy: adminId,
        dateOfBirth: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        dateOfBirth: true,
      },
    });

    // 💍 Anniversaries
    const anniversaryCelebrants = await prisma.membertoSpouse.findMany({
      where: {
        marriedAt: {
          gte: startDate,
          lte: endDate,
        },
        member: {
          churchId,
          addedBy: adminId,
        },
      },
      select: {
        marriedAt: true,
        spouseName: true,
        member: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    return res.status(200).json({
      month: monthNumber,
      birthdays: birthdayCelebrants,
      anniversaries: anniversaryCelebrants,
    });
  } catch (error) {
    console.error("Monthly celebrations error:", error);
    return res.status(500).json({
      message: "Failed to fetch monthly celebrations",
    });
  }
};

export const getWeeklyCelebrations = async (req: Request, res: Response) => {
  const { churchId } = req.params;
  const adminId = (req.user as any)?.id;

  if (!churchId) {
    return res.status(400).json({ message: "Church ID is required" });
  }

  if (!adminId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const today = new Date();

    // 📅 Start of week (Monday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    startOfWeek.setHours(0, 0, 0, 0);

    // 📅 End of week (Sunday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    // 🎂 Birthdays this week
    const birthdayCelebrants = await prisma.membershipProfile.findMany({
      where: {
        churchId,
        addedBy: adminId,
        dateOfBirth: {
          gte: startOfWeek,
          lte: endOfWeek,
        },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        dateOfBirth: true,
      },
    });

    // 💍 Anniversaries this week
    const anniversaryCelebrants = await prisma.membertoSpouse.findMany({
      where: {
        marriedAt: {
          gte: startOfWeek,
          lte: endOfWeek,
        },
        member: {
          churchId,
          addedBy: adminId,
        },
      },
      select: {
        marriedAt: true,
        spouseName: true,
        member: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    return res.status(200).json({
      week: {
        start: startOfWeek,
        end: endOfWeek,
      },
      birthdays: birthdayCelebrants,
      anniversaries: anniversaryCelebrants,
    });
  } catch (error) {
    console.error("Weekly celebrations error:", error);
    return res.status(500).json({
      message: "Failed to fetch weekly celebrations",
    });
  }
};

export const sendCelebrationEmail = async (req: Request, res: Response) => {
  const churchId = req.params.churchId;
  const adminId = (req.user as any)?.id;
  const { type, email } = req.body;
  if (!churchId) {
    return res.status(400).json({ message: "Church ID is required" });
  }

  if (!adminId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  if (!type || !["birthday", "anniversary"].includes(type)) {
    return res
      .status(400)
      .json({ message: "Valid celebration type is required" });
  }

  if (!email) {
    return res.status(400).json({ message: "Recipient email is required" });
  }

  try {
    if (type === "birthday") {
      await sendEmail({
        email,
        subject: "Happy Birthday!",
        html: birthdayEmail(),
      });
    } else if (type === "anniversary") {
      await sendEmail({
        email,
        subject: "Happy Anniversary!",
        html: sendAniversaryEmail(),
      });
    }

    return res
      .status(200)
      .json({ message: "Celebration email sent successfully" });
  } catch (error) {
    console.error("Send celebration email error:", error);
    return res
      .status(500)
      .json({ message: "Failed to send celebration email" });
  }
};
