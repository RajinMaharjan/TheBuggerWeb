import React, {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useRef,
} from "react";
import { Text, Grid, Button, Group, Flex, Paper } from "@mantine/core";
import Selector from "../ui/Quiz/Selector";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/utils/dataInterfaces";
import { changeOption, collectAnswers } from "@/src/features/quiz/quizSlice";

interface Props {
  setMarks: Dispatch<SetStateAction<number>>;
  setResult: Dispatch<SetStateAction<boolean>>;
}

function MCQ({ setMarks, setResult }: Props) {
  const [activeIndex, setIndex] = useState<number>(0);
  const amount = 20;
  const dispatch = useDispatch();
  const { quizState, answerState } = useSelector(
    (store: RootState) => store.quiz
  );
  const { name, options } = quizState[activeIndex];
  const isZero: boolean = activeIndex == 0;
  const isLast: boolean = activeIndex == amount - 1;

  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (containerRef.current) {
      const activeButton = containerRef.current.childNodes[activeIndex - 1];
      if (activeButton instanceof HTMLElement) {
        containerRef.current.scrollLeft = activeButton.offsetLeft;
      }
    }
  }, [activeIndex]);

  return (
    <Flex justify={"space-between"} direction={"column"} mt={{ lg: "4vh" }}>
      <Flex
        mih={{ base: "60vh", sx: "90vh", lg: "67vh" }}
        px={"5vw"}
        direction={{ base: "column", md: "row" }}
        mb={{ base: "3vh", md: "4vh", lg: "5vh" }}
        ml={{ base: "md", md: "0" }}
        justify={{ base: "space-around", lg: "space-between" }}
      >
        {/* Quiz Grid */}
        <Grid
          p={{ base: "5vw", md: "2vw" }}
          mih={"40%"}
          w={{ base: "100%", md: "78%" }}
          bg={"basic-bg.2"}
          sx={{
            borderRadius: "25px",
          }}
        >
          <Grid justify="center" mb={"lg"} columns={12} mih={"80%"}>
            <Grid.Col span={12}>
              <Text
                fz={{ base: "md", sm: "lg", md: "xl", xl: "1.5vw" }}
                h={"10%"}
                ta={"left"}
              >
                {activeIndex + 1}. {name}
              </Text>
            </Grid.Col>
            {/* Quiz option Grid */}
            {quizState[activeIndex]?.options.map((x, optionIndex) => (
              <Grid.Col
                span={12}
                key={optionIndex}
                w={"100%"}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Paper
                  p={"md"}
                  shadow="md"
                  onClick={() =>
                    dispatch(changeOption({ activeIndex, optionIndex }))
                  }
                  bg={x.isSelected ? "basic-bg.1" : "white"}
                  w={{ base: "100%" }}
                  ta={"left"}
                  radius={"md"}
                  sx={{ cursor: "pointer" }}
                >
                  {x.name}
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </Grid>
        <br />
        {/* Quiz Navigator for screen size greater than md breakpoint */}
        <Grid
          columns={8}
          w={{ base: "100%", md: "20%" }}
          ml={10}
          p={"1vw"}
          display={{ base: "none", md: "inherit" }}
          bg={"basic-bg.2"}
          sx={{
            "@media (min-width:64em)": {
              border: "2px solid black",
              borderLeft: "3px solid black",
              borderRight: "1px solid black",
              minHeight: "60vh",
            },
            borderRadius: "25px",
            minHeight: "20vh",
          }}
        >
          {Array.from({ length: amount }, (_, i) => (
            <Grid.Col span={1} md={2} key={i}>
              <div>
                <Selector num={i} active={activeIndex} setActive={setIndex} />
              </div>
            </Grid.Col>
          ))}
        </Grid>
        {/* Quiz Navigator for screen size less than md breakpoint */}
        <Flex
          ref={containerRef}
          gap={"9vw"}
          w={"100%"}
          display={{ base: "initial", md: "none" }}
          sx={{
            "@media (max-width:64em)": {
              overflowX: "scroll",
            },
            height: "5vh",
          }}
        >
          {Array.from({ length: amount }, (_, i) => (
            <div key={i} style={{ width: "10vw" }}>
              <Selector num={i} active={activeIndex} setActive={setIndex} />
            </div>
          ))}
        </Flex>
      </Flex>

      <Group position="apart" bg={"basic-bg.1"} p={"lg"}>
        {
          <Button
            onClick={() => {
              setIndex(activeIndex - 1);
            }}
            display={isZero ? "none" : "initial"}
          >
            Prev
          </Button>
        }
        {isZero && <div></div>}
        <Text c="white" fw="">
          {activeIndex + 1}/{amount}
        </Text>
        <Button
          onClick={() => {
            setIndex(activeIndex + 1);
          }}
          display={isLast ? "none" : "initial"}
        >
          Next
        </Button>
        {isLast && (
          <Button
            onClick={() => {
              dispatch(collectAnswers());
              setResult(true);
            }}
          >
            Submit
          </Button>
        )}
      </Group>
    </Flex>
  );
}

export default MCQ;
