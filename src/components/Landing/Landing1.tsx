"use client";
import { Box, Button, Grid, Text, Title } from "@mantine/core";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loginOpen } from "@/src/features/auth/authSlice";
interface Props {}

const Landing1 = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        overflow: "hidden",
        objectFit: "contain",
        paddingTop: "10vh",
      }}
    >
      <Grid
        grow
        px={"5vw"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "90vh",
        }}
        gutter={5}
        gutterXs="md"
        gutterMd="xl"
        gutterXl={50}
      >
        <Grid.Col span={5} px={"sm"}>
          <div style={{ padding: "2vw" }}>
            <Text
              fz={{ base: "md", sm: "lg", md: "xl", lg: "1.5vw", xl: "2.5vw" }}
              fw={"700"}
            >
              Welcome to The Bugger:
              <br />
              Connect, Test, and Get Paid!
            </Text>{" "}
            <br />
            <Text fz={{ base: "md", sm: "lg", md: "xl", xl: "1.5vw" }}>
              The Bugger is a platform designed to connect skilled QA testers
              with exciting projects that align with their compatible devices
              and testing capabilities. It offers a seamless experience for
              testers to connect with projects, showcase their skills, and earn
              rewards.
            </Text>
            <br />
            <Link href="/">
              <Button
                sx={{ color: "white" }}
                onClick={() => dispatch(loginOpen())}
              >
                Become a tester
              </Button>
            </Link>
          </div>
        </Grid.Col>
        <Grid.Col span={3}>
          <Box w={"100%"} sx={{ boxShadow: "initial" }}>
            <Image
              src={"/images/LandingPage/Bug Fixed_Two Color.svg"}
              alt="StockPhoto"
              width={500}
              height={500}
            />
          </Box>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Landing1;
