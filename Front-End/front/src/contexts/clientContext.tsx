import { createContext, useContext } from "react";
import { IRegisterAndUpdateClient, IProviderProps } from "@/types";
import api from "@/services/api";
import { Box, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import nookies from "nookies";
import { setCookie } from "nookies";

interface ClientProviderData {
  registerClient: (userData: IRegisterAndUpdateClient) => void;
  updateClient: (userData: IRegisterAndUpdateClient) => void;
  deleteClient: () => void;
}

const ClientContext = createContext<ClientProviderData>(
  {} as ClientProviderData
);

export const ClientProvider = ({ children }: IProviderProps) => {
  const toast = useToast();
  const router = useRouter();
  const cookies = nookies.get();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const registerClient = (userData: IRegisterAndUpdateClient) => {
    api
      .post("/client", userData)
      .then((response) => {
        toast({
          title: "sucess",
          variant: "solid",
          position: "top-right",
          isClosable: true,
          render: () => (
            <Box
              color={"gray.50"}
              p={3}
              bg={"green.600"}
              fontWeight={"bold"}
              borderRadius={"md"}
            >
              Cadastro realizado com sucesso !
            </Box>
          ),
        });
        router.push("/");
      })
      .catch((err) => {
        toast({
          title: "error",
          variant: "solid",
          position: "top-right",
          isClosable: true,
          render: () => (
            <Box
              color={"gray.50"}
              p={3}
              bg={"red.600"}
              fontWeight={"bold"}
              borderRadius={"md"}
            >
              Verifique se os dados estão corretos
            </Box>
          ),
        });
      });
  };
  const updateClient = (userData: IRegisterAndUpdateClient) => {
    api
      .patch(`/client/${cookies["userId"]}`, userData)
      .then((response) => {
        setCookie(null, "userName", response.data.name, {
          maxAge: 60 * 30,
          path: "/",
        });
        setCookie(null, "userEmail", response.data.email, {
          maxAge: 60 * 30,
          path: "/",
        });
        setCookie(null, "userFone", response.data.telephone, {
          maxAge: 60 * 30,
          path: "/",
        });
        refreshData();
        toast({
          title: "sucess",
          variant: "solid",
          position: "top-right",
          isClosable: true,
          render: () => (
            <Box
              color={"gray.50"}
              p={3}
              bg={"green.600"}
              fontWeight={"bold"}
              borderRadius={"md"}
            >
              Atualização realizada com sucesso !
            </Box>
          ),
        });
      })
      .catch((err) => {
        toast({
          title: "error",
          variant: "solid",
          position: "top-right",
          isClosable: true,
          render: () => (
            <Box
              color={"gray.50"}
              p={3}
              bg={"red.600"}
              fontWeight={"bold"}
              borderRadius={"md"}
            >
              Verifique se os dados estão corretos
            </Box>
          ),
        });
      });
  };
  const deleteClient = () => {
    api
      .delete(`/client/${cookies["userId"]}`)
      .then((response) => {
        destroyCookie(null, "token");
        destroyCookie(null, "userName");
        destroyCookie(null, "userId");
        router.push("/");
        toast({
          title: "sucess",
          variant: "solid",
          position: "top-right",
          isClosable: true,
          render: () => (
            <Box
              color={"gray.50"}
              p={3}
              bg={"green.600"}
              fontWeight={"bold"}
              borderRadius={"md"}
            >
              Deletado com sucesso !
            </Box>
          ),
        });
      })
      .catch((err) => {
        toast({
          title: "error",
          variant: "solid",
          position: "top-right",
          isClosable: true,
          render: () => (
            <Box
              color={"gray.50"}
              p={3}
              bg={"red.600"}
              fontWeight={"bold"}
              borderRadius={"md"}
            >
              Algo deu errado
            </Box>
          ),
        });
      });
  };
  return (
    <ClientContext.Provider
      value={{ registerClient, updateClient, deleteClient }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => useContext(ClientContext);
