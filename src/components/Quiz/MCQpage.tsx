"use client";
import {
  Container,
  Text,
  Grid,
  Button,
  Radio,
  Group,
  Modal,
  useMantineTheme,
  Flex,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import MCQ from "./MCQ";
import { useMediaQuery } from "@mantine/hooks";
import Result from "../ui/Quiz/Result";
import { useRouter } from "next/router";

type Props = {};

const MCQpage = (props: Props) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 50em)");
  const [resultOpened, setResultOpened] = useState<boolean>(false);
  const [marks, setMarks] = useState(0);
  const { push } = useRouter();

  const renderer = ({
    minutes,
    seconds,
    completed,
  }: {
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      setResultOpened(true);
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <>
      <Modal
        opened={resultOpened}
        onClose={() => {
          setResultOpened(false);
          push("/");
        }}
        size={"auto"}
        fullScreen={isMobile}
        withCloseButton={false}
        centered
        styles={{
          content: { overflow: "hidden !important" },
          body: {
            backgroundColor: theme.colors["basic-bg"][2],
          },
        }}
      >
        <Result />
      </Modal>
      <Flex
        direction={"column"}
        bg={"basic-bg.3"}
        justify={{ base: "space-between" }}
        h="100vh"
        sx={{ textAlign: "center" }}
      >
        {" "}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          px={"5vw"}
          mt={{ md: "xl" }}
        >
          <Text fw={"bold"} fz={"4vh"}>
            QA Quiz
          </Text>
          <Text fw={"bold"} fz={"4vh"}>
            <Countdown date={Date.now() + 1800000} renderer={renderer} />
          </Text>
        </Flex>
        <MCQ setMarks={setMarks} setResult={setResultOpened} />
      </Flex>
    </>
  );
};

export default MCQpage;
