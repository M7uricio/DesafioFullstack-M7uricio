import { createContext, useContext, useState } from "react";
import { setCookie } from "nookies";
import { useRouter } from "next/router";
import { IClient, IClientLogin } from "@/types";
import api from "@/services/api";

interface AuthproviderData {
  setToken: (value: string) => void;
  login: (userData: IClientLogin) => void;
  token: string | undefined;
  user: IClient | null;
}

const AuthContext = createContext<AuthproviderData>({} as AuthproviderData);
