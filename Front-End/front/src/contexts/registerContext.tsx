import { createContext, useContext } from "react";
import { IClientRegister, IProviderProps } from "@/types";
import api from "@/services/api";
import { Box, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface RegisterProviderData {
  registerClient: (userData: IClientRegister) => void;
}

const RegisterContext = createContext<RegisterProviderData>(
  {} as RegisterProviderData
);

export const RegisterProvider = ({ children }: IProviderProps) => {
  const toast = useToast();
  const router = useRouter();

  const registerClient = (userData: IClientRegister) => {
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
  return (
    <RegisterContext.Provider value={{ registerClient }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
