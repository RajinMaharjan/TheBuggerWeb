import { baseURL } from "@/src/utils/env";
import axios from "axios";

export const verifyEmail = async (token: any, email: any) => {
  const data = await axios.post(`${baseURL}/api/user/confirmEmail`, {
    token: token,
    email: email,
  });
  return data;
};
