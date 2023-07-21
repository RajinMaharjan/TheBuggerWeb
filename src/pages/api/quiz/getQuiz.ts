import { baseURL } from "@/src/utils/env";
import axios from "axios";

export const getQuiz = async () => {
  const quiz = await axios.get(`${baseURL}/api/quiz`);
  console.log(quiz);
  return quiz;
};
