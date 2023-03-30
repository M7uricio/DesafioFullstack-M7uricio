import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/index";

const readClientService = async (idClient: number) => {
  const clientRepo = AppDataSource.getRepository(Client);

  const clients = clientRepo.find({
    select: {
      id: true,
      name: true,
      email: true,
      telephone: true,
      orderedAt: true,
    },
  });

  const client = (await clients).filter((elm) => {
    return elm.id == idClient;
  });

  return client;
};

export default readClientService;
