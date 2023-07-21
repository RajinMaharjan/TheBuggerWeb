import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Text, Container } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState, resultData } from "@/src/utils/dataInterfaces";
import { postAnswers } from "@/src/pages/api/quiz/postAnswers";
import { handleError, handleSuccess } from "@/src/utils/Notification";
interface Props {}

const Result = (props: Props) => {
  const amount = 20;
  const { answerState } = useSelector((store: RootState) => store.quiz);
  const [resultData, setResultData] = useState<resultData>({
    correct: 0,
    incorrect: 0,
    marks: 0,
    message: "Loading",
    status: "Loading",
  });
  useEffect(() => {
    const sendAnswers = async () => {
      try {
        const response = await postAnswers(answerState);
        setResultData(response.data);
        response.data.status === "Failed"
          ? handleError(response.data.status, response.data.message)
          : handleSuccess(response.data.status, response.data.message);
      } catch (error: any) {
        handleError(error.code, error.message);
      }
    };

    sendAnswers();
  }, []);

  const passThreshold = Math.floor(0.8 * 100);
  return (
    <Container
      fluid
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Result</h3> <p>Total Question : {amount};</p>
      <p>
        Total Score : {resultData?.marks} /100
        <br />
      </p>
      <p>
        Correct Answers: {resultData?.correct} <br />
      </p>
      <p>Wrong Answers: {resultData?.incorrect}</p>
      {resultData?.marks >= passThreshold ? (
        <div>
          <Text c={"darkgreen"}>You Passed</Text>{" "}
          <Link href={"/additionalInfo"}>
            <Button>OK</Button>
          </Link>
        </div>
      ) : (
        <div>
          <Text c={"red"}>You Failed</Text>{" "}
          <Link href={"/"}>
            <Button>OK</Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Result;
