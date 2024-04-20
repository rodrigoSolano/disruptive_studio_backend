import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserData {
  id: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserData;
    }
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (token == null)
    return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.status(403).json({ message: "Token is not valid" });

    req.user = user as UserData;
    next();
  });
};
