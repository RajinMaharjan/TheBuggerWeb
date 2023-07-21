"use client";
import React, { useState } from "react";
import MCQpage from "../components/Quiz/MCQpage";
import QuizLanding from "../components/Quiz/QuizLanding";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import { AppShell } from "@mantine/core";

interface Props {}

const Quiz = (props: Props) => {
  const [startQuiz, setStartQuiz] = useState<boolean>(false);

  return (
    <>{startQuiz ? <MCQpage /> : <QuizLanding startQuiz={setStartQuiz} />} </>
  );
};

export default Quiz;
