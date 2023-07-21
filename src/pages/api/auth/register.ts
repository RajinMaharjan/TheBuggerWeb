import { baseURL } from "@/src/utils/env";
import axios from "axios";

export const registerPost = (values: any) => {
  const data = axios.post(`${baseURL}/api/user/register`, values);
  return data;
};
