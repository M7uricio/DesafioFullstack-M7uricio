import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contacts } from "../entities";
import AppError from "../errors";

const contactExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idContact = req.params.id;

  const contactRepo = AppDataSource.getRepository(Contacts);

  const contact = await contactRepo.findOneBy({ id: +idContact });

  if (!contact) {
    throw new AppError("Contact not exist", 404);
  }

  return next();
};

export { contactExistMiddleware };
