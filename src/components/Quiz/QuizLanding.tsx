import { setQuiz } from "@/src/features/quiz/quizSlice";
import { RootState } from "@/src/utils/dataInterfaces";
import { baseURL } from "@/src/utils/env";
import { Box, Button, Container, Text } from "@mantine/core";
import axios from "axios";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  startQuiz: Dispatch<SetStateAction<boolean>>;
}

const QuizLanding = ({ startQuiz: startQuiz }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getQuiz() {
      try {
        const response = await axios.get(`${baseURL}/api/quiz`);
        dispatch(setQuiz(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    getQuiz();
  }, []);

  const rules = [
    "The total question the tester needs to answer is 20.",
    "The total time to finish the MCQ is 30 minutes which starts to tick as soon as you press start quiz.",
    "If you are late for the exam, you will have a clock according to the duration of the exam.",
    " The exam progress will be lost and your attempt is not counted if you press Back on your browser.",
    "If you close the app, Your attempt is not counted until it gets submitted and results might not be populated.",
    "If you refresh the page, Your attempt is not counted until it gets submitted and results might not be populated.",
    "The Submit button is only present in the last question of the exams.",
    "After Submitting the Exam, only then your attempt is counted.",
    "The exam will be Auto Submitted after the clock runs out and your attempt is counted.",
    "You can navigate to questions using the Next button or using Question Palette.",
    "Results will be populated and can have access by clicking on the SEE Results button.",
  ];
  return (
    <Container fluid bg={"basic-bg.2"} px={"5vw"} pt={"2vw"} mih={"100vh"}>
      <Text
        fz={{ base: "md", sm: "lg", md: "xl", lg: "1.5vw", xl: "2.5vw" }}
        fw={"700"}
      >
        1st Phase: QA Quiz
      </Text>{" "}
      <Text fz={{ base: "sm", sm: "sm", md: "md", xl: "xl" }}>
        You need to pass quiz to be a certified tester for this app.{" "}
      </Text>
      <Container sx={{ textAlign: "center" }} mt={50}>
        <Text fz={{ base: "md", sm: "lg", md: "xl", xl: "1.5vw" }} fw={"bold"}>
          Rules of the MCQ:
        </Text>
        <Box p={4} sx={{ textAlign: "left" }}>
          {rules.map((rule, index) => (
            <Text fz={{ base: "sm", sm: "sm", md: "md", xl: "xl" }} key={index}>
              Rule {index + 1}: {rule}
            </Text>
          ))}
        </Box>
        <Button onClick={() => startQuiz(true)} mb={"xl"}>
          Start Quiz
        </Button>{" "}
      </Container>
    </Container>
  );
};

export default QuizLanding;
