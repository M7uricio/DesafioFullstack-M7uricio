export interface ICreateRequestClient {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

export interface IUpdateCreateRequestClient {
  name?: string;
  email?: string;
  password?: string;
  telephone?: string;
}

export interface IClientResponse {
  name?: string;
  email?: string;
  telephone?: string;
}

export interface IClientRes {
  id: number;
  name: string;
  email: string;
  telephone: string;
  orderedAt: string | Date;
}
