import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import AppError from "../errors";

const clientExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idClient = req.params.id;

  const clientRepo = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOneBy({ id: +idClient });

  if (!client) {
    throw new AppError("Client not exist", 404);
  }

  return next();
};

export { clientExistMiddleware };
