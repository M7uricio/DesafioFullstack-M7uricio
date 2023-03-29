import { createContext, useContext } from "react";
import { setCookie } from "nookies";
import { IRegisterandUpdateContacts, IProviderProps } from "@/types";
import api from "@/services/api";
import { Box, useToast } from "@chakra-ui/react";

interface ContactProviderData {
  createContact: (contactData: IRegisterandUpdateContacts) => void;
  updateContact: (contactData: IRegisterandUpdateContacts, id: number) => void;
  deleteContact: (id: number) => void;
}

const ContactContext = createContext<ContactProviderData>(
  {} as ContactProviderData
);

export const ContactProvider = ({ children }: IProviderProps) => {
  const toast = useToast();

  const createContact = (contactData: IRegisterandUpdateContacts) => {
    api
      .post("/contact", contactData)
      .then((response) => {
        setCookie(null, "token", response.data.token, {
          maxAge: 60 * 30,
          path: "/",
        });
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
    id: number
  ) => {
    api
      .patch(`/contact/${id}`, contactData)
      .then((response) => {
        setCookie(null, "token", response.data.token, {
          maxAge: 60 * 30,
          path: "/",
        });
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

  const deleteContact = (id: number) => {
    api
      .delete(`/contact/${id}`)
      .then((response) => {
        setCookie(null, "token", response.data.token, {
          maxAge: 60 * 30,
          path: "/",
        });
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
