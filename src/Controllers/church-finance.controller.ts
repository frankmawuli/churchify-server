import { Request, Response } from "express";
import prisma from "../Libs/prisma";

export const addTransaction = async (req: Request, res: Response) => {
  const userId = (req.user as any)?.id;
  const { churchId } = req.params;

  try {
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const {
      amount,
      transactionType,
      category,
      description,
      date,
      donorName,
      paymentMethod,
      paymentStatus,
    } = req.body;

    if (!amount || !date) {
      return res.status(400).json({
        message: "Amount and date are required",
      });
    }

    const transaction = await prisma.transactions.create({
      data: {
        churchId,
        amount,
        transactionType,
        category,
        description,
        date: new Date(date),
        donorName,
        paymentMethod,
        paymentStatus,
        addedBy: userId,
      },
    });

    return res.status(201).json({
      message: "Transaction recorded successfully",
      transaction,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add transaction" });
  }
};


export const getAllTransactions = async (req: Request, res: Response) => {
  const { churchId } = req.params;

  try {
    const transactions = await prisma.transactions.findMany({
      where: { churchId },
      orderBy: { transactionDate: "desc" },
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    return res.status(200).json(transactions);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch transactions" });
  }
};


export const getSingleTransaction = async (req: Request, res: Response) => {
  const { transactionId } = req.params;

  try {
    const transaction = await prisma.transactions.findUnique({
      where: { id: transactionId },
      include: {
        user: {
          select: { id: true, name: true },
        },
        church: true,
      },
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    return res.status(200).json(transaction);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch transaction" });
  }
};

