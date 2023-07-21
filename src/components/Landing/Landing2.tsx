import { Autocomplete, Button, Grid, Text, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cards from "./Cards";

const Landing2 = () => {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Grid
          grow
          px={"5vw"}
          py={"2vw"}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          h={"auto"}
          gutter={5}
          gutterXs="md"
          gutterMd="xl"
          gutterXl={50}
        >
          <Grid.Col span={1}>
            <div style={{ width: "100%" }}>
              <Image
                src={"/images/LandingPage/User Group_Monochromatic.svg"}
                alt="About US Image"
                width={400}
                height={300}
              />
            </div>
          </Grid.Col>
          <Grid.Col
            span={1}
            sx={{
              objectFit: "fill",
            }}
          >
            <Text
              fz={{ base: "md", sm: "lg", md: "xl", lg: "1.5vw", xl: "2.5vw" }}
              fw={"700"}
            >
              About Us
            </Text>{" "}
            <Text
              fz={{ base: "sm", sm: "md", md: "lg", lg: "xl", xl: "1vw" }}
              fw={"700"}
            >
              &quot;Empowering QA Professionals for Success&quot;
            </Text>{" "}
            <Text
              fz={{ base: "md", sm: "lg", md: "xl", lg: "1vw", xl: "1.5vw" }}
            >
              The Bugger revolutionizes quality assurance by connecting skilled
              testers with compatible projects. We empower testers, foster a
              vibrant community, and provide a seamless testing experience. Join
              us to shape the future of QA. <br />
            </Text>
            <br />
            <Link href="/">
              <Button>Learn More</Button>
            </Link>
          </Grid.Col>
        </Grid>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
          marginBottom: "30px",
        }}
      >
        <Text
          fz={{ base: "md", sm: "lg", md: "xl", lg: "1.5vw", xl: "2.5vw" }}
          // my={{ lg: "xl" }}
          fw={"700"}
        >
          Why Choose Us?
        </Text>
        <Cards />
      </div>
    </>
  );
};

export default Landing2;
