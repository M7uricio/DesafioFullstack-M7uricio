import api from "@/services/api";
import type { NextApiRequest, NextApiResponse } from "next";

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await api.post("/client", req.body);

  if (!response) {
    return res.status(401).json(response);
  }
  console.log(response);

  return res.status(200).json(response);
};
