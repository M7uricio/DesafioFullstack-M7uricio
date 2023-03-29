import { createContext, useContext, useState } from "react";
import { setCookie } from "nookies";
import { IClient, IClientLogin, IProviderProps } from "@/types";
import api from "@/services/api";
import { Box, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface AuthProviderData {
  login: (userData: IClientLogin) => void;
  setToken: (value: string) => void;
  token: string | undefined;
  user: IClient | null;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: IProviderProps) => {
  const toast = useToast();
  const router = useRouter();
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<IClient | null>(null);

  const login = (userData: IClientLogin) => {
    api
      .post("/login", userData)
      .then((response) => {
        setCookie(null, "token", response.data.token, {
          maxAge: 60 * 30,
          path: "/",
        });
        setCookie(null, "userName", response.data.user.name, {
          maxAge: 60 * 30,
          path: "/",
        });
        setCookie(null, "userId", response.data.user.id, {
          maxAge: 60 * 30,
          path: "/",
        });
        setToken(response.data.token);
        setUser(response.data.user);
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
              Login realizado com sucesso !
            </Box>
          ),
        });

        router.push("/dashboard");
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
              Verifique se o e-mail e senha estão corretos
            </Box>
          ),
        });
      });
  };
  return (
    <AuthContext.Provider value={{ login, token, user, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
