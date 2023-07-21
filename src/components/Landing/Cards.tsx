import { CardSection, Flex, Grid } from "@mantine/core";
import React from "react";
import { Card, Text, Badge, Group } from "@mantine/core";
import LT from "@/public/images/Logo2.png";
import Image from "next/image";
type Props = {};
const Cards = (props: Props) => {
  const cardInfo = [
    {
      path: "/images/LandingPage/Cards/icon1.png",
      description: `"The Leading platform for QA professionals."`,
    },
    {
      path: "/images/LandingPage/Cards/icon2.png",
      description: `"Uncover QA success, from beginner to professional."`,
    },
    // {
    //   path: "/images/LandingPage/Cards/icon3.png",
    //   description: `"Connect talented QA experts with top employers from various industries."`,
    // },
    {
      path: "/images/LandingPage/Cards/icon4.png",
      description: `"Showcase expertise, stand out professionally."`,
    },
    {
      path: "/images/LandingPage/Cards/icon5.png",
      description: `"Connect, collaborate, grow in our QA community."`,
    },
  ];
  return (
    <Grid
      columns={10}
      grow
      px={"5vw"}
      mt="2vh"
      justify="space-around"
      sx={{
        textAlign: "center",
        height: "auto",
      }}
    >
      {cardInfo?.map((item) => (
        <div key={item.description}>
          <Grid.Col sm={5} lg={1} sx={{ height: "100%" }}>
            <Card
              shadow="sm"
              p={"lg"}
              radius="md"
              bg={"basic-bg.2"}
              mih={"100%"}
              miw={"250px"}
              w={"18vw"}
              withBorder
            >
              <Image
                src={item.path}
                style={{ objectFit: "contain" }}
                width={200}
                height={200}
                alt="card_image"
              />

              <Text fz={{ sm: "md", md: "lg", lg: "xl" }}>
                {item.description}
              </Text>
            </Card>
          </Grid.Col>
        </div>
      ))}
    </Grid>
  );
};

export default Cards;
