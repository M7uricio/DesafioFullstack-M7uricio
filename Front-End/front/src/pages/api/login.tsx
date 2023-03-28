import api from "@/services/api";
import type { NextApiRequest, NextApiResponse } from "next";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await api.post("/login", req.body);

  if (!response) {
    return res.status(401).json({ message: "E-mail ou senha invalido" });
  }
  console.log(response);

  return res.status(200).json(response);
};
