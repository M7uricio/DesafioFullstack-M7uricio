import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/index";

const deleteClientService = async (idClient: number) => {
  const clientRepo = AppDataSource.getRepository(Client);

  clientRepo.delete({ id: idClient });
};

export default deleteClientService;
