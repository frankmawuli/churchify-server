import { Request, Response } from "express";
import prisma from "../Libs/prisma";

export const addProductToStore = async (req: Request, res: Response) => {
  const adminId = (req.user as any)?.id;
  const { churchId } = req.params;

  try {
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const {
      productName,
      description,
      price,
      stock,
      category,
      imageUrl,
      status,
    } = req.body;

    if (!productName || price === undefined || stock === undefined) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const product = await prisma.storeItem.create({
      data: {
        churchId,
        productName,
        description,
        price,
        stock,
        category,
        imageUrl,
        status,
        createdBy: adminId,
      },
    });

    return res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add product" });
  }
};




export const updateStoreProduct = async (req: Request, res: Response) => {
  const adminId = (req.user as any)?.id;
  const { productId } = req.params;

  try {
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const updatedProduct = await prisma.storeItem.update({
      where: { id: productId },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(404).json({ message: "Product not found" });
  }
};




export const deleteStoreProduct = async (req: Request, res: Response) => {
  const adminId = (req.user as any)?.id;
  const { productId } = req.params;

  try {
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await prisma.storeItem.delete({
      where: { id: productId },
    });

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(404).json({ message: "Product not found" });
  }
};



export const getAllStoreProducts = async (req: Request, res: Response) => {
  const { churchId } = req.params;

  try {
    const products = await prisma.storeItem.findMany({
      where: { churchId },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch products" });
  }
};



export const getSingleStoreProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const product = await prisma.storeItem.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch product" });
  }
};

