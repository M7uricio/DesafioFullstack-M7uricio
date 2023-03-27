import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/index";
import { IClientResponse } from "../../interfaces/client.interfaces";

const listClientService = async (): Promise<IClientResponse[]> => {
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

  return clients;
};

export default listClientService;
