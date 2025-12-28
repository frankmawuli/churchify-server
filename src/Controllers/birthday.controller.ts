import { Request, Response } from "express";
import prisma from "../Libs/prisma";

// Get upcoming birthdays for a church
export const getUpcomingBirthdays = async (req: Request, res: Response) => {
  const { churchId } = req.params;
  const { days = 30 } = req.query; // Default to 30 days

  try {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + Number(days));

    const members = await prisma.membershipProfile.findMany({
      where: {
        churchId,
        dateOfBirth: { not: null },
        status: "ACTIVE",
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        dateOfBirth: true,
      },
    });

    // Filter members with upcoming birthdays
    const upcomingBirthdays = members
      .filter((member) => {
        if (!member.dateOfBirth) return false;

        const birthDate = new Date(member.dateOfBirth);
        const thisYearBirthday = new Date(
          today.getFullYear(),
          birthDate.getMonth(),
          birthDate.getDate()
        );

        // If birthday already passed this year, check next year
        if (thisYearBirthday < today) {
          thisYearBirthday.setFullYear(today.getFullYear() + 1);
        }

        return thisYearBirthday >= today && thisYearBirthday <= futureDate;
      })
      .map((member) => {
        const birthDate = new Date(member.dateOfBirth!);
        const age = today.getFullYear() - birthDate.getFullYear();
        const thisYearBirthday = new Date(
          today.getFullYear(),
          birthDate.getMonth(),
          birthDate.getDate()
        );

        if (thisYearBirthday < today) {
          thisYearBirthday.setFullYear(today.getFullYear() + 1);
        }

        return {
          ...member,
          upcomingBirthday: thisYearBirthday,
          age: age,
        };
      })
      .sort(
        (a, b) => a.upcomingBirthday.getTime() - b.upcomingBirthday.getTime()
      );

    return res.status(200).json({
      count: upcomingBirthdays.length,
      birthdays: upcomingBirthdays,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to fetch upcoming birthdays" });
  }
};

// Get birthdays for a specific month
export const getBirthdaysByMonth = async (req: Request, res: Response) => {
  const { churchId } = req.params;
  const { month, year } = req.query;

  try {
    if (!month) {
      return res.status(400).json({ message: "Month is required" });
    }

    const targetMonth = Number(month) - 1; // JavaScript months are 0-indexed
    const targetYear = year ? Number(year) : new Date().getFullYear();

    const members = await prisma.membershipProfile.findMany({
      where: {
        churchId,
        dateOfBirth: { not: null },
        status: "ACTIVE",
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
        dateOfBirth: true,
      },
    });

    const birthdaysInMonth = members
      .filter((member) => {
        if (!member.dateOfBirth) return false;
        const birthDate = new Date(member.dateOfBirth);
        return birthDate.getMonth() === targetMonth;
      })
      .map((member) => {
        const birthDate = new Date(member.dateOfBirth!);
        const age = targetYear - birthDate.getFullYear();
        const birthdayThisYear = new Date(
          targetYear,
          birthDate.getMonth(),
          birthDate.getDate()
        );

        return {
          ...member,
          birthdayDate: birthdayThisYear,
          age: age,
          day: birthDate.getDate(),
        };
      })
      .sort((a, b) => a.day - b.day);

    return res.status(200).json({
      month: Number(month),
      year: targetYear,
      count: birthdaysInMonth.length,
      birthdays: birthdaysInMonth,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to fetch birthdays by month" });
  }
};

// Get upcoming anniversaries for a church
export const getUpcomingAnniversaries = async (req: Request, res: Response) => {
  const { churchId } = req.params;
  const { days = 30 } = req.query;

  try {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + Number(days));

    const spouseRecords = await prisma.membertoSpouse.findMany({
      where: {
        member: {
          churchId,
          status: "ACTIVE",
        },
      },
      include: {
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

    const upcomingAnniversaries = spouseRecords
      .filter((record) => {
        const marriageDate = new Date(record.marriedAt);
        const thisYearAnniversary = new Date(
          today.getFullYear(),
          marriageDate.getMonth(),
          marriageDate.getDate()
        );

        if (thisYearAnniversary < today) {
          thisYearAnniversary.setFullYear(today.getFullYear() + 1);
        }

        return (
          thisYearAnniversary >= today && thisYearAnniversary <= futureDate
        );
      })
      .map((record) => {
        const marriageDate = new Date(record.marriedAt);
        const yearsMarried = today.getFullYear() - marriageDate.getFullYear();
        const thisYearAnniversary = new Date(
          today.getFullYear(),
          marriageDate.getMonth(),
          marriageDate.getDate()
        );

        if (thisYearAnniversary < today) {
          thisYearAnniversary.setFullYear(today.getFullYear() + 1);
        }

        return {
          memberId: record.member.id,
          memberName: `${record.member.firstName} ${record.member.lastName}`,
          spouseName: record.spouseName,
          email: record.member.email,
          upcomingAnniversary: thisYearAnniversary,
          yearsMarried: yearsMarried,
          originalDate: marriageDate,
        };
      })
      .sort(
        (a, b) =>
          a.upcomingAnniversary.getTime() - b.upcomingAnniversary.getTime()
      );

    return res.status(200).json({
      count: upcomingAnniversaries.length,
      anniversaries: upcomingAnniversaries,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to fetch upcoming anniversaries" });
  }
};

// Get all reminders (birthdays and anniversaries) for a church
export const getAllReminders = async (req: Request, res: Response) => {
  const { churchId } = req.params;

  try {
    const reminders = await prisma.reminders.findMany({
      where: { churchId },
      include: {
        member: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
      orderBy: { dateOfBirth: "asc" },
    });

    return res.status(200).json({
      count: reminders.length,
      reminders,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch reminders" });
  }
};

// Create a reminder
export const createReminder = async (req: Request, res: Response) => {
  const { churchId } = req.params;
  const { memberId, memberName, reminderType, age, dateOfBirth } = req.body;

  try {
    if (!memberId || !memberName || !reminderType || !dateOfBirth) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const reminder = await prisma.reminders.create({
      data: {
        churchId,
        memberId,
        memberName,
        reminderType,
        age: age || 0,
        dateOfBirth: new Date(dateOfBirth),
      },
    });

    return res.status(201).json({
      message: "Reminder created successfully",
      reminder,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create reminder" });
  }
};

// Delete a reminder
export const deleteReminder = async (req: Request, res: Response) => {
  const { reminderId } = req.params;

  try {
    await prisma.reminders.delete({
      where: { id: reminderId },
    });

    return res.status(200).json({ message: "Reminder deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to delete reminder" });
  }
};
