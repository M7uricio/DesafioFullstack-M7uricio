import { Request, Response } from "express";
import createContactsService from "../services/contacts/create.services";
import deleteContactsService from "../services/contacts/delete.services";
import listContactsService from "../services/contacts/list.services";
import updateContactsService from "../services/contacts/update.services";

export const createContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await createContactsService(req.body, req.user.id);
  return res.status(201).json(data);
};

export const listContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await listContactsService();
  return res.status(200).json(data);
};

export const updateContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await updateContactsService(req.body, +req.params.id);
  return res.status(200).json(data);
};

export const deleteContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await deleteContactsService(+req.params.id);
  return res.status(200).json(data);
};
