import axios from "axios";

const api = axios.create({
  baseURL:
    "https://documentation-api-desafio-full-stack-jh087j88c-entragaskenzie.vercel.app/",
});

export default api;
