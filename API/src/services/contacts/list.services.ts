import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/index";
import { ICreateRequestContact } from "../../interfaces/contacts.interface";

const listContactsService = async (): Promise<ICreateRequestContact[]> => {
  const contactsRepo = AppDataSource.getRepository(Contacts);

  const contacts = contactsRepo.find();

  return contacts;
};

export default listContactsService;
