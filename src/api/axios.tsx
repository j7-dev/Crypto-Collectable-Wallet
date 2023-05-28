import axios, { AxiosInstance } from "axios";
import { apiTimeout, apiUrl } from "@/utils";

const instance: AxiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: parseInt(apiTimeout, 10),
});

export default instance;
