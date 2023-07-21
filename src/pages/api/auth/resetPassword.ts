import { baseURL } from "@/src/utils/env";
import axios from "axios";

export const resetPassword = (values: any) => {
  const data = axios.post(`${baseURL}/api/user/resetPassword`, values);
  return data;
};
