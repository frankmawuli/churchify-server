import { Request, Response } from "express";
import prisma from "../Libs/prisma";

export async function onboardChurch(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id; // from auth middleware

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const {
      churchName,
      address,
      denomination,
      contactEmail,
      contactPhone,
      memberCapacity,
      branding,
    } = req.body;

    // Basic validation
    if (
      !churchName ||
      !address ||
      !denomination ||
      !contactEmail ||
      !contactPhone ||
      !memberCapacity
    ) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }

    // Create church + admin account in a transaction
    const church = await prisma.$transaction(async (tx) => {
      // Create church
      const newChurch = await tx.churches.create({
        data: {
          churchName,
          address,
          denomination,
          contactEmail,
          contactPhone,
          memberCapacity: Number(memberCapacity),
          status: "ACTIVE",
          plan: "FREE",
          creatorId: userId,
        },
      });

      // Assign creator as PRIMARY admin
      await tx.churchAdminAccounts.create({
        data: {
          churchId: newChurch.churchId,
          adminId: userId,
          churchAdminType: "PRIMARY",
          assignedBy: userId,
        },
      });

      // Optional branding
      if (branding) {
        await tx.churchBranding.create({
          data: {
            churchId: newChurch.churchId,
            logoUrl: branding.logoUrl,
            primaryColor: branding.primaryColor,
            secondaryColor: branding.secondaryColor,
            colorPresets: branding.colorPresets,
          },
        });
      }

      // Update user role to CHURCH_ADMIN if needed
      await tx.user.update({
        where: { id: userId },
        data: {
          role: "CHURCH_ADMIN",
        },
      });

      return newChurch;
    });

    return res.status(201).json({
      message: "Church onboarded successfully",
      church,
    });
  } catch (error: any) {
    console.error("Onboard church error:", error);

    return res.status(500).json({
      message: "Failed to onboard church",
      error: error.message,
    });
  }
}
