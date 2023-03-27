import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/index";
import {
  IClientResponse,
  IUpdateCreateRequestClient,
} from "../../interfaces/client.interfaces";
import { clientWithoutPasswordSerializer } from "../../schemas";

const updateClientService = async (
  payload: IUpdateCreateRequestClient,
  idClient: number
) => {
  const clientRepo = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOneBy({ id: idClient });

  const updateClient = clientRepo.create({ ...client, ...payload });

  await clientRepo.save(updateClient);

  const clientWithoutPassword = await clientWithoutPasswordSerializer.validate(
    updateClient,
    { stripUnknown: true }
  );

  return clientWithoutPassword;
};

export default updateClientService;
