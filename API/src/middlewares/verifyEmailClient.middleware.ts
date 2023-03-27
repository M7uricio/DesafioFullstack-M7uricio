import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import AppError from "../errors";

const emailClientMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientRepo = AppDataSource.getRepository(Client);

  const emailBody = req.body.email;

  const email = await clientRepo.findOneBy({ email: emailBody });

  if (email) {
    throw new AppError("Email already exists", 404);
  }

  return next();
};

export { emailClientMiddleware };
