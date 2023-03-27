import { handleErrorMiddleware } from "./handleError.middleware";
import { clientExistMiddleware } from "./verifyClient.middleware";
import { contactExistMiddleware } from "./verifyContact.middleware";
import { clientSchemaMiddleware } from "./clientSchema.middleware";
import { contactSchemaMiddleware } from "./contactSchema.middleware";
import { emailClientMiddleware } from "./verifyEmailClient.middleware";
import { emailContactsMiddleware } from "./verifyEmailContacts.middleware";
import { ensureAuthMiddleware } from "./verifyAuth.middleware";

export {
  handleErrorMiddleware,
  clientExistMiddleware,
  contactExistMiddleware,
  contactSchemaMiddleware,
  clientSchemaMiddleware,
  emailClientMiddleware,
  emailContactsMiddleware,
  ensureAuthMiddleware,
};
