import Header from "@/components/headers/header";
import ListContacts from "@/components/lists/listContacts";
import api from "@/services/api";
import { IContacts } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";

interface Props {
  contacts: IContacts[];
}

const Dashboard: NextPage<Props> = ({ contacts }) => {
  return (
    <>
      <Header />
      <ListContacts contacts={contacts}></ListContacts>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);

  if (!cookies["token"]) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const response = await api.get("/contacts", {
    headers: { Authorization: `Bearer ${cookies["token"]}` },
  });
  const contacts: IContacts[] = response.data;

  return {
    props: {
      contacts,
    },
  };
};

export default Dashboard;
