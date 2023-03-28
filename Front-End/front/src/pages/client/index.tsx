import { GetServerSideProps, NextPage } from "next";
import api from "@/services/api";
import { IClientRegister } from "@/types";
import { Center, List, ListItem, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  clients: IClientRegister[];
}

const Home: NextPage<Props> = ({ clients }) => {
  return (
    <Center>
      <List>
        {clients.map((client, index) => {
          return (
            <ListItem key={index}>
              <Link as={NextLink} href={`/client/${client.name}`}>
                {client.name}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Center>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await api.get("/client");
  const clients: IClientRegister[] = response.data;

  return { props: { clients } };
};
