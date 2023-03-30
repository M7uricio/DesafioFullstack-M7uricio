import { ReactNode } from "react";

export interface IClient {
  id: string;
  name: string;
  email: string;
  password: string;
  telephone: string;
  orderAt: Date;
}

export interface IRenderClient {
  name: string;
  email: string;
}

export interface IRegisterAndUpdateClient {
  name?: string;
  email?: string;
  password?: string;
  telephone?: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IContacts {
  id: string;
  name: string;
  email: string;
  password: string;
  telephone: string;
  orderAt: Date;
}

export interface IRegisterandUpdateContacts {
  name?: string;
  email?: string;
  password?: string;
  telephone?: string;
}

export interface IProviderProps {
  children: ReactNode;
}
