import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/index";
import { ICreateRequestContact } from "../../interfaces/contacts.interface";

const deleteContactsService = async (idContact: number) => {
  const contactsRepo = AppDataSource.getRepository(Contacts);

  contactsRepo.delete({ id: idContact });
};

export default deleteContactsService;
