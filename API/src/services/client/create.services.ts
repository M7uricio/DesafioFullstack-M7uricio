import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/index";
import { ICreateRequestClient } from "../../interfaces/client.interfaces";
import { clientWithoutPasswordSerializer } from "../../schemas";

const createClientService = async (payload: ICreateRequestClient) => {
  const clientRepo = AppDataSource.getRepository(Client);

  const newClient = clientRepo.create({ ...payload });

  await clientRepo.save(newClient);

  const clientWithoutPassword = await clientWithoutPasswordSerializer.validate(
    newClient,
    { stripUnknown: true }
  );

  return clientWithoutPassword;
};

export default createClientService;
