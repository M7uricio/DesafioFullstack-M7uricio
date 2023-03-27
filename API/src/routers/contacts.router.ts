import { Router } from "express";
import {
  createContactsController,
  deleteContactsController,
  listContactsController,
  updateContactsController,
} from "../controllers/contacts.controller";
import {
  contactExistMiddleware,
  contactSchemaMiddleware,
  emailContactsMiddleware,
  ensureAuthMiddleware,
} from "../middlewares";
import { contactsSchema, contactsUpdateSchema } from "../schemas";

const contactsRouter: Router = Router();

contactsRouter.post(
  "",
  ensureAuthMiddleware,
  emailContactsMiddleware,
  contactSchemaMiddleware(contactsSchema),
  createContactsController
);
contactsRouter.get("", ensureAuthMiddleware, listContactsController);
contactsRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  emailContactsMiddleware,
  contactSchemaMiddleware(contactsUpdateSchema),
  contactExistMiddleware,
  updateContactsController
);
contactsRouter.delete("/:id", contactExistMiddleware, deleteContactsController);

export { contactsRouter };
