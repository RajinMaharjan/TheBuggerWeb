import { baseURL } from "@/src/utils/env";
import axios from "axios";

export const postAnswers = async (values: any) => {
  const data = await axios.post(`${baseURL}/api/quiz/submit`, values);
  return data;
};
