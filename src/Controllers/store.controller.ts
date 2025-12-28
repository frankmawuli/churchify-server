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

// Order Management Functions
export const createOrder = async (req: Request, res: Response) => {
  const userId = (req.user as any)?.id;
  const { churchId } = req.params;
  const { itemId, quantity } = req.body;

  try {
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!itemId || !quantity || quantity <= 0) {
      return res
        .status(400)
        .json({ message: "Item ID and valid quantity are required" });
    }

    // Check if product exists and has enough stock
    const product = await prisma.storeItem.findUnique({
      where: { id: itemId },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.stock < quantity) {
      return res.status(400).json({
        message: "Insufficient stock",
        available: product.stock,
      });
    }

    const totalPrice = product.price * quantity;

    // Create order and update stock in a transaction
    const order = await prisma.$transaction(async (tx) => {
      const newOrder = await tx.orders.create({
        data: {
          churchId,
          itemId,
          quantity,
          totalPrice,
          orderedBy: userId,
          status: "PENDING",
        },
      });

      // Update product stock
      await tx.storeItem.update({
        where: { id: itemId },
        data: {
          stock: { decrement: quantity },
          status:
            product.stock - quantity === 0 ? "OUT_OF_STOCK" : product.status,
        },
      });

      return newOrder;
    });

    return res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create order" });
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  const { churchId } = req.params;
  const { status } = req.query;

  try {
    const whereClause: any = { churchId };
    if (status) {
      whereClause.status = status;
    }

    const orders = await prisma.orders.findMany({
      where: whereClause,
      include: {
        storeItem: true,
        user: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: { orderDate: "desc" },
    });

    return res.status(200).json({
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch orders" });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  const { orderId } = req.params;

  try {
    const order = await prisma.orders.findUnique({
      where: { id: orderId },
      include: {
        storeItem: true,
        user: {
          select: { id: true, name: true, email: true },
        },
        church: {
          select: { churchId: true, churchName: true },
        },
      },
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch order" });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  const adminId = (req.user as any)?.id;
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }

    const updatedOrder = await prisma.orders.update({
      where: { id: orderId },
      data: { status },
    });

    return res.status(200).json({
      message: "Order status updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to update order status" });
  }
};

export const cancelOrder = async (req: Request, res: Response) => {
  const userId = (req.user as any)?.id;
  const { orderId } = req.params;

  try {
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const order = await prisma.orders.findUnique({
      where: { id: orderId },
      include: { storeItem: true },
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Only allow cancellation if order is pending
    if (order.status !== "PENDING") {
      return res.status(400).json({
        message: "Only pending orders can be cancelled",
      });
    }

    // Cancel order and restore stock in a transaction
    await prisma.$transaction(async (tx) => {
      await tx.orders.update({
        where: { id: orderId },
        data: { status: "CANCELLED" },
      });

      // Restore product stock
      await tx.storeItem.update({
        where: { id: order.itemId },
        data: {
          stock: { increment: order.quantity },
          status: "AVAILABLE",
        },
      });
    });

    return res.status(200).json({
      message: "Order cancelled successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to cancel order" });
  }
};

export const getUserOrders = async (req: Request, res: Response) => {
  const userId = (req.user as any)?.id;

  try {
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const orders = await prisma.orders.findMany({
      where: { orderedBy: userId },
      include: {
        storeItem: true,
        church: {
          select: { churchId: true, churchName: true },
        },
      },
      orderBy: { orderDate: "desc" },
    });

    return res.status(200).json({
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch user orders" });
  }
};
