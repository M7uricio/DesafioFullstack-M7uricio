import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contacts } from "../entities";
import AppError from "../errors";

const emailContactsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactsRepo = AppDataSource.getRepository(Contacts);

  const emailBody = req.body.email;

  const email = await contactsRepo.findOneBy({ email: emailBody });

  if (email) {
    throw new AppError("Email already exists", 404);
  }

  return next();
};

export { emailContactsMiddleware };
