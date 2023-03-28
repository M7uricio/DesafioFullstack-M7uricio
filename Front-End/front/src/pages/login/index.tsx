import { NextPage } from "next";
import IClient from "@/types";
import { Center, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  clients: IClient[];
}

const Login: NextPage<Props> = () => {
  return (
    <Center>
      <form action="">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Senha</label>
        <input id="password" type="password" />
        <button>Login</button>
      </form>
      <Link as={NextLink} href={`/client/register`}>
        Cadastrar
      </Link>
    </Center>
  );
};

export default Login;

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const response = await api.get("/login");
//   const clients: IClient[] = response.data;

//   return { props: { clients } };
// };
