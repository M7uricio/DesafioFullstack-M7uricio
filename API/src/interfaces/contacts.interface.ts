import { ICreateRequestClient } from "./client.interfaces";

export interface ICreateRequestContact {
  name: string;
  email: string;
  telephone: string;
  orderedAt: Date | string;
  client?: ICreateRequestClient;
}
