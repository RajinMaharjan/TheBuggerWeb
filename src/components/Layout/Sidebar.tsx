import React, { Dispatch, SetStateAction } from "react";
import { Box, Button, Flex, Group, Text } from "@mantine/core";
import { RxDashboard } from "react-icons/rx";
import { BsFolder2 } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import Dashboard from "@/src/pages/dashboard";
import { LuLayoutDashboard } from "react-icons/lu";

interface Props {
  setButtonSelection: Dispatch<SetStateAction<number>>;
}

const Sidebar = ({ setButtonSelection }: Props) => {
  const menu = [
    { name: "Dashboard", icon: LuLayoutDashboard },
    { name: "Projects", icon: BsFolder2 },
    { name: "Payments", icon: AiOutlineDollar },
    { name: "Settings", icon: FiSettings },
  ];
  return (
    <Flex
      direction={"column"}
      bg={"basic-bg.0"}
      p={"sm"}
      ta={"left"}
      w={{ md: "18vw", lg: "15vw" }}
      sx={{
        borderTop: "2px solid white",
        borderBottom: "2px solid white",
      }}
    >
      {menu.map((data, index) => (
        <Box
          px={{ base: "xs", lg: "lg" }}
          py={{ base: "0", md: "md" }}
          c={"white"}
          key={index}
          onClick={() => setButtonSelection(index)}
          sx={{
            cursor: "pointer",
            alignContent: "center",
            "&:hover": {
              backgroundColor: "#1687A7",
            },
          }}
        >
          {" "}
          <Group position={"left"}>
            <data.icon size={20} />
            <Text display={{ base: "none", md: "initial" }}>{data.name}</Text>
          </Group>
        </Box>
      ))}
    </Flex>
  );
};

export default Sidebar;
