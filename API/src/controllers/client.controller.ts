import { Request, Response } from "express";
import createClientService from "../services/client/create.services";
import deleteClientService from "../services/client/delete.services";
import listClientService from "../services/client/list.services";
import updateClientService from "../services/client/update.services";

export const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await createClientService(req.body);
  return res.status(201).json(data);
};

export const listClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await listClientService();
  return res.status(200).json(data);
};

export const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await updateClientService(req.body, +req.params.id);
  return res.status(200).json(data);
};

export const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await deleteClientService(+req.params.id);
  return res.status(200).json(data);
};
