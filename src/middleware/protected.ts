import jwt from "jsonwebtoken";
import {Response, Request, NextFunction} from "express";

const JWT_SECRET = process.env.JWT_ACCESS_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

// ✅ Make this function async because we’re using an async DB query
export default async function protectedRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies.token;
    console.log("Token from cookies:", token);

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized access. No token provided." });
    }

    const decoded = jwt.verify(token, JWT_SECRET as string);
    console.log(decoded);

    if (!decoded) {
      return res
        .status(401)
        .json({ message: "Unauthorized access. Invalid token." });
    }

    const user = decoded

    req.user = user; 
    next();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Auth error:", error.message);
    } else {
      console.error("Auth error:", error);
    }
    return res.status(401).json({ message: "Unauthorized access." });
  }
}
