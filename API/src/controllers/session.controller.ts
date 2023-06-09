import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/login.interfaces";
import { createSessionService } from "../services/session/session.service";

const createSessionController = async (req: Request, res: Response) => {
  const sessionData: IUserLogin = req.body;
  const token = await createSessionService(sessionData);
  return res.status(200).json(token);
};
export { createSessionController };
