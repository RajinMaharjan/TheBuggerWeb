import { Grid, Group, Paper, Text } from "@mantine/core";
import { GoStack } from "react-icons/go";
import { BsBug } from "react-icons/bs";
import { VscFolderActive } from "react-icons/vsc";
import React from "react";

interface Props {}

const ProjectStatus = (props: Props) => {
  const projectData = [
    {
      title: "Total Projects",
      icon: GoStack,
      value: "15",
      state: "Projects",
    },
    {
      title: "Active Projects",
      icon: BsBug,
      value: "5",
      state: "In Progress",
    },
    {
      title: "Completed Projects",
      icon: VscFolderActive,
      value: "10",
      state: "Completed",
    },
  ];
  return (
    <>
      <Text fz={"xl"} fw={"bold"} mb={"md"}>
        Dashboard
      </Text>
      <Grid pr={"5vw"}>
        {projectData.map((data, index) => (
          <Grid.Col span={12} lg={4} key={index}>
            <Paper
              shadow="md"
              radius={"sm"}
              p={"xl"}
              mih={"10vh"}
              bg={"basic-bg.2"}
            >
              <Group position="left" mr={"xl"}>
                <data.icon />
                <b>{data.title}</b>
              </Group>
              {data.value} &nbsp;
              {data.state}{" "}
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default ProjectStatus;
