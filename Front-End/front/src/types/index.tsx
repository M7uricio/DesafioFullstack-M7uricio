export interface IClient {
  id: string;
  name: string;
  email: string;
  password: string;
  telephone: string;
  orderAt: Date;
}

export interface IClientRegister {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}
