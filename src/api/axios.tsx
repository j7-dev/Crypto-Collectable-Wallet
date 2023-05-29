import axios, { AxiosInstance } from "axios";
import { apiTimeout, apiUrl } from "@/utils";

const instance: AxiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: parseInt(apiTimeout, 10),
});

instance.interceptors.response.use(
  async function (response) {
    console.log("API success", response);
    return Promise.resolve(response);
  },
  async function (error) {
    console.log("API error", error);
    return Promise.reject(error);
  }
);

export default instance;
