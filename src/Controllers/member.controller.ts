
import { Request, Response } from "express";
import prisma from "../Libs/prisma";
import fs from "fs";
import csv from "csv-parser";
import { memberCsvSchema } from "../Schemas/member-csv-schema";

export const addMember = async (req: Request, res: Response) => {
    const adminId = (req.user as any)?.id;
    const { firstName, lastName, email, phoneNumber, address, relationshipStatus, spouseName, childrenNames, dateOfBirth } = req.body;
    if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: "First name, last name, and email are required" });
    }
    try {
        //check if member already exists in the church
        const existingMember = await prisma.membershipProfile.findFirst({
            where: {
                churchId: adminId,
                email: email
            }
        });
        if (existingMember) {
            return res.status(409).json({ message: "Member with this email already exists" });
        }
        const newMember = await prisma.membershipProfile.create({
            data: {
                churchId: adminId!,
                addedBy: adminId!,
                firstName,
                lastName,
                email,
                phoneNumber,
                address,
                relationshipStatus,
                spouseName,
                childrenNames,
                dateOfBirth,
            }
        });
        return res.status(201).json({ message: "Member added successfully", member: newMember });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", details: error });
    }
};

export const getMemberDetails = async (req: Request, res: Response) => {
    const adminId = (req.user as any)?.id;
    const memberId = req.params.memberId;
    try {
        if (!memberId) {
            return res.status(400).json({ message: "Member ID is required" });
        }
        if (!adminId) {
            return res.status(401).json({ message: "Unauthorized to access this resource" });
   
        }
        const member = await prisma.membershipProfile.findFirst({
            where: {
                id: memberId,
                addedBy: adminId
            }
        });
        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }
        return res.status(200).json({ member });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", details: error });
    }
};

export const updateMemberDetails = async (req: Request, res: Response) => {
    const adminId = (req.user as any)?.id;
    const memberId = req.params.memberId;
    const { firstName, lastName, email, phoneNumber, address, relationshipStatus, spouseName, childrenNames, dateOfBirth } = req.body;
    try {
        if (!memberId) {
            return res.status(400).json({ message: "Member ID is required" });
         }
        if (!adminId) {
            return res.status(401).json({ message: "Unauthorized to access this resource" });
        }
        const member = await prisma.membershipProfile.findFirst({
            where: {
                id: memberId,
                addedBy: adminId
            }
        });
        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }
        const updatedMember = await prisma.membershipProfile.update({
            where: {
                id: memberId
            },
            data: {
                firstName,
                lastName,
                email,
                phoneNumber,
                address,
                relationshipStatus,
                spouseName,
                childrenNames,
                dateOfBirth
            }
        });
        return res.status(200).json({ message: "Member updated successfully", member: updatedMember });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", details: error });
    }
};

export const deleteMember = async (req: Request, res: Response) => {
    const adminId = (req.user as any)?.id;
    const memberId = req.params.memberId;
    try{
        if (!memberId) {
            return res.status(400).json({ message: "Member ID is required" });
        }
        if (!adminId) {
            return res.status(401).json({ message: "Unauthorized to access this resource" });
        }
        const member = await prisma.membershipProfile.findFirst({
            where: {
                id: memberId,
                addedBy: adminId
            }
        });
        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }
        await prisma.membershipProfile.delete({
            where: {
                id: memberId
            }
        });
        return res.status(200).json({ message: "Member deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", details: error });
    }
};

export const getAllMembers = async (req: Request, res: Response) => {
    const adminId = (req.user as any)?.id;
    try {
        if (!adminId) {
            return res.status(401).json({ message: "Unauthorized to access this resource" });
        }
        const members = await prisma.membershipProfile.findMany({
            where: {
                churchId: adminId
            }
        });
        return res.status(200).json({ members });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", details: error });
    }
};

export const addMembersByCSV = async (req: Request, res: Response) => {
  const adminId = (req.user as any)?.id;

  if (!adminId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (!req.file) {
    return res.status(400).json({ message: "CSV file required" });
  }

  const rows: any[] = [];
  const errors: any[] = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (row) => rows.push(row))
    .on("end", async () => {
      for (const [index, row] of rows.entries()) {
        try {
          const data = memberCsvSchema.parse(row);

          // Check duplicate email in same church
          const exists = await prisma.membershipProfile.findFirst({
            where: {
              churchId: adminId,
              email: data.email,
            },
          });

          if (exists) {
            throw new Error("Member already exists");
          }

          await prisma.membershipProfile.create({
            data: {
              churchId: adminId,
              addedBy: adminId,
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              phoneNumber: data.phoneNumber,
              address: data.address,
              relationshipStatus: data.relationshipStatus,
              spouseName: data.spouseName,
              childrenNames: data.childrenNames
                ? data.childrenNames.split("|")
                : [],
              dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
            },
          });
        } catch (err: any) {
          errors.push({
            row: index + 1,
            email: row.email,
            error: err.message,
          });
        }
      }

      return res.status(201).json({
        total: rows.length,
        successful: rows.length - errors.length,
        failed: errors.length,
        errors,
      });
    });
};
