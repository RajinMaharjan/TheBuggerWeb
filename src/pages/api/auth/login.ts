import { baseURL } from "@/src/utils/env";
import axios from "axios";
export const loginPost = (values: any) => {
  const data = axios.post(`${baseURL}/api/user/login`, values);
  return data;
};
