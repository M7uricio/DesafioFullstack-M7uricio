import { NextPage } from "next";
import NextLink from "next/link";
import IClient from "@/types";
import { Center, Link } from "@chakra-ui/react";

interface Props {
  clients: IClient[];
}

const Register: NextPage<Props> = () => {
  return (
    <Center>
      <h1>Register</h1>
      <form action="">
        <label htmlFor="name">name</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Senha</label>
        <input id="password" type="password" />
        <label htmlFor="telephone">Telefone</label>
        <input id="telephone" type="text" />
        <button>Cadastrar</button>
      </form>
      <Link as={NextLink} href={`/login`}>
        Login
      </Link>
    </Center>
  );
};

export default Register;
