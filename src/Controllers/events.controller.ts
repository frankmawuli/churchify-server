import { Request, Response } from "express";
import prisma from "../Libs/prisma";

// Create a new event
export const createEvent = async (req: Request, res: Response) => {
  const adminId = (req.user as any)?.id;
  const churchId = req.params.memberId;
  const {
    flyerUrl,
    title,
    description,
    eventDate,
    category,
    startTime,
    endTime,
    location,
    capacity,
    ticketPrice,
  } = req.body;

  try {
    if (!adminId) {
      return res
        .status(401)
        .json({ message: "Unauthorized to access this resource" });
    }
    if (!churchId) {
      return res.status(400).json({ message: "Church ID is required" });
    }

    const newEvent = await prisma.events.create({
      data: {
        churchId,
        createdBy: adminId,
        flyerUrl,
        title,
        description,
        eventDate,
        category,
        startTime,
        endTime,
        location,
        capacity,
        ticketPrice,
      },
    });

    return res
      .status(201)
      .json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};

// Edit an event by ID
export const updateEvent = async (req: Request, res: Response) => {
  const adminId = (req.user as any)?.id;
  const { eventId } = req.params;
  const {
    flyerUrl,
    title,
    description,
    eventDate,
    category,
    startTime,
    endTime,
    location,
    capacity,
    ticketPrice,
  } = req.body;

  try {
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const event = await prisma.events.findUnique({ where: { id: eventId } });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const updatedEvent = await prisma.events.update({
      where: { id: eventId },
      data: {
        flyerUrl,
        title,
        description,
        eventDate,
        category,
        startTime,
        endTime,
        location,
        capacity,
        ticketPrice,
      },
    });

    return res
      .status(200)
      .json({ message: "Event updated successfully", event: updatedEvent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};

// Delete an event by ID
export const deleteEvent = async (req: Request, res: Response) => {
  const adminId = (req.user as any)?.id;
  const { eventId } = req.params;

  try {
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const event = await prisma.events.findUnique({ where: { id: eventId } });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    await prisma.events.delete({ where: { id: eventId } });

    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};

// Get all events for a specific church
export const getAllEventsForChurch = async (req: Request, res: Response) => {
  const churchId = req.params.memberId;

  try {
    if (!churchId) {
      return res.status(400).json({ message: "Church ID is required" });
    }

    const events = await prisma.events.findMany({
      where: { churchId },
      orderBy: { eventDate: "asc" },
    });

    return res.status(200).json({ events });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};

// Get a single event by ID
export const getEventById = async (req: Request, res: Response) => {
  const { eventId } = req.params;

  try {
    const event = await prisma.events.findUnique({ where: { id: eventId } });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    return res.status(200).json({ event });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};
