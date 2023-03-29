import { NextFunction, Request, Response } from "express";
import AppError from "../errors";

const handleErrorMiddleware = (
  error: unknown,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  console.error(error);
  return res.status(500).json({ message: "Internal server error" });
};

export { handleErrorMiddleware };
