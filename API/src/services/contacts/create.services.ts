import { AppDataSource } from "../../data-source";
import { Client, Contacts } from "../../entities/index";
import { ICreateRequestContact } from "../../interfaces/contacts.interface";

const createContactsService = async (
  payload: ICreateRequestContact,
  idClient: number
): Promise<ICreateRequestContact> => {
  const contactsRepo = AppDataSource.getRepository(Contacts);
  const clientRepo = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOneBy({ id: idClient });

  const newContact = contactsRepo.create({ ...payload });

  newContact.client = client!;

  await contactsRepo.save(newContact);

  const returnContact = {
    id: newContact.id,
    name: newContact.name,
    email: newContact.email,
    telephone: newContact.telephone,
    orderedAt: newContact.orderedAt,
  };

  return returnContact;
};

export default createContactsService;
