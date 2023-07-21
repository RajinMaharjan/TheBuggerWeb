import { baseURL } from "@/src/utils/env";
import axios from "axios";

export const forgotPassword = (value: any) => {
  const data = axios.post(`${baseURL}/api/user/forgotPassword`, {
    email: value,
  });
  return data;
};
