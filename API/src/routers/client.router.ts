import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientController,
  updateClientController,
} from "../controllers/client.controller";
import {
  clientExistMiddleware,
  clientSchemaMiddleware,
  emailClientMiddleware,
} from "../middlewares/index";
import { clientSchema, clientUpdateSchema } from "../schemas/index";

const clientRouter: Router = Router();

clientRouter.post(
  "",
  emailClientMiddleware,
  clientSchemaMiddleware(clientSchema),
  createClientController
);
clientRouter.get("", listClientController);
clientRouter.patch(
  "/:id",
  emailClientMiddleware,
  clientExistMiddleware,
  clientSchemaMiddleware(clientUpdateSchema),
  updateClientController
);
clientRouter.delete("/:id", clientExistMiddleware, deleteClientController);

export { clientRouter };
