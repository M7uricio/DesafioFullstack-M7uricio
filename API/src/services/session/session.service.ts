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

  const clients = clientRepo.find({
    select: {
      id: true,
      name: true,
      email: true,
      telephone: true,
      orderedAt: true,
    },
  });

  const userWithoutPassword = (await clients).filter((elm) => {
    return elm.email == email;
  });

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

  return { token, user: userWithoutPassword[0] };
};

export { createSessionService };
