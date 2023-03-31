import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-full-stack.onrender.com",
});

export default api;
