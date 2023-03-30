import { createContext, useContext } from "react";
import { IRegisterandUpdateContacts, IProviderProps } from "@/types";
import api from "@/services/api";
import { Box, useToast } from "@chakra-ui/react";
import nookies from "nookies";
import { useRouter } from "next/router";
interface ContactProviderData {
  createContact: (contactData: IRegisterandUpdateContacts) => void;
  updateContact: (contactData: IRegisterandUpdateContacts, id: string) => void;
  deleteContact: (id: string) => void;
}

const ContactContext = createContext<ContactProviderData>(
  {} as ContactProviderData
);

export const ContactProvider = ({ children }: IProviderProps) => {
  const toast = useToast();
  const cookies = nookies.get();

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const createContact = (contactData: IRegisterandUpdateContacts) => {
    api
      .post("/contacts", contactData, {
        headers: { Authorization: `Bearer ${cookies["token"]}` },
      })
      .then((response) => {
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
              Contato adicionado com sucesso !
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

  const updateContact = (
    contactData: IRegisterandUpdateContacts,
    id: string
  ) => {
    api
      .patch(`/contacts/${id}`, contactData, {
        headers: { Authorization: `Bearer ${cookies["token"]}` },
      })
      .then((response) => {
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
              Contato atualizado com sucesso !
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

  const deleteContact = (id: string) => {
    api
      .delete(`/contacts/${id}`, {
        headers: { Authorization: `Bearer ${cookies["token"]}` },
      })
      .then((response) => {
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
              Contato deletado com sucesso !
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
              Não foi possivel deletar o contato
            </Box>
          ),
        });
      });
  };

  return (
    <ContactContext.Provider
      value={{ createContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
