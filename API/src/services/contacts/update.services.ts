import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/index";
import { ICreateRequestContact } from "../../interfaces/contacts.interface";

const updateContactsService = async (
  payload: ICreateRequestContact,
  idContact: number
): Promise<ICreateRequestContact> => {
  const contactsRepo = AppDataSource.getRepository(Contacts);

  const contact = await contactsRepo.findOneBy({ id: idContact });

  const updateContact = contactsRepo.create({ ...contact, ...payload });

  await contactsRepo.save(updateContact);

  return updateContact;
};

export default updateContactsService;
