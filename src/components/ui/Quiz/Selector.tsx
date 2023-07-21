import { BackgroundImage, Box, Button, Paper } from "@mantine/core";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  num: number;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const Selector = ({ num, active, setActive }: Props) => {
  let selected: boolean = num === active;
  // Coloring the selector gold on answering
  // const [answerSelected, setAnswerSelected] = useState<boolean[]>(
  //   Array(20).fill(false)
  // );
  // const { questions } = dummyQns;
  // useEffect(() => {
  //   const updatedAnswerSelected = [...answerSelected];
  //   questions.forEach((value: any, index) => {
  //     for (let obj of value.options) {
  //       if (obj.isSelected) {
  //         updatedAnswerSelected[index] = true;
  //         break;
  //       }
  //     }
  //   });
  //   setAnswerSelected(updatedAnswerSelected);
  // }, [num]);

  // const color = selected ? "#276678" : answerSelected[num] ? "gold" : "#F6F5F5";

  return (
    <Paper
      shadow="md"
      radius={"xl"}
      c={selected ? "white" : "black"}
      bg={selected ? "#276678" : "#F6F5F5"} //color,}}
      ta={"center"}
      miw="28px"
      mih="28px"
      p={{ base: "0", md: "2px", lg: "5px", xl: "10px" }}
      sx={{
        border: "1px solid grey",
        cursor: "pointer",
      }}
      onClick={() => setActive(num)}
    >
      {selected ? <b>{num + 1}</b> : <span>{num + 1}</span>}
    </Paper>
  );
};

export default Selector;
