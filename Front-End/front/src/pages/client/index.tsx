import HeaderClient from "@/components/headers/headerClient";
import InfoClient from "@/components/other/infoClient";
import ModalFormUpdateClient from "@/components/modals/modalFormUpdateClient";
import { useClient } from "@/contexts/clientContext";
import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import nookies from "nookies";
import { useEffect } from "react";

const Client = () => {
  const { deleteClient } = useClient();
  const router = useRouter();

  const checkAuth = () => {
    const cookies = nookies.get();

    if (!cookies["token"]) {
      router.push("/");
    }
  };

  useEffect(() => {
    checkAuth();
  });

  return (
    <>
      <HeaderClient />
      <Flex w={"95vw"} m={"0 auto"}>
        <InfoClient />
      </Flex>
      <Flex
        h={"100vh"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"90px"}
      >
        <ModalFormUpdateClient />
        <Button
          onClick={deleteClient}
          p={"30px"}
          bg={"red.600"}
          color={"white"}
          _hover={{ bg: "red.500" }}
          fontSize={"1.2rem"}
          fontWeight={700}
        >
          Deletar Usuário
        </Button>
      </Flex>
    </>
  );
};

export default Client;
