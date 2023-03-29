import "dotenv/config";
import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { IUserLogin } from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";
import AppError from "../../errors";
import { Client } from "../../entities";

const createSessionService = async ({ email, password }: IUserLogin) => {
  const clientRepo = AppDataSource.getRepository(Client);

  const user = await clientRepo.findOneBy({ email: email });

  if (!user) {
    throw new AppError("User or password invalid", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("User or password invalid", 403);
  }

  const token = jwt.sign({}, "supersecret", {
    subject: String(user.id),
    expiresIn: "24h",
  });
  return { token, user: user };
};

export { createSessionService };
