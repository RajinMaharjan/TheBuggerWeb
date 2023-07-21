import { Box, Divider, Flex } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { BsGooglePlay, BsApple } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";
type Props = {};

const Footer = (props: Props) => {
  return (
    <Flex direction={"column"} px={"5vw"} bg={"basic-bg.0"}>
      <Flex
        justify={"center"}
        align={"center"}
        direction={{ base: "column", md: "row" }}
        gap={{ base: "sm", md: "lg" }}
        p={"1vh"}
        c={"white"}
        bg={"basic-bg.0"}
        sx={{
          overflowX: "hidden",
        }}
      >
        <div style={{ width: "34vw", textAlign: "center" }}>
          <Flex direction={{ base: "column" }} gap={{ base: "sm", sm: "lg" }}>
            <Link
              href="/terms_of_use"
              style={{ color: "white", textDecoration: "none" }}
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy_policy"
              style={{ color: "white", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>

            <Link href="/" style={{ color: "white", textDecoration: "none" }}>
              Contact Us
            </Link>
          </Flex>{" "}
        </div>
        <div
          style={{ width: "33vw", textAlign: "center", alignItems: "center" }}
        >
          Connect With Us{" "}
          <Flex mt={"10px"} justify={"center"}>
            <Link
              href="#"
              target="_blank"
              style={{ color: "white", marginRight: "10px" }}
            >
              <AiFillFacebook size="30" />
            </Link>
            <Link
              href="#"
              target="_blank"
              style={{ color: "white", marginRight: "10px" }}
            >
              <AiFillInstagram size="30" />
            </Link>
            <Link
              href="#"
              target="_blank"
              style={{ color: "white", marginRight: "10px" }}
            >
              <AiFillLinkedin size="30" />
            </Link>
          </Flex>
        </div>
        <div
          style={{ width: "34vw", textAlign: "center", alignItems: "center" }}
        >
          Test our features on the Smartphone <br />
          <Flex
            justify={"center"}
            direction={{ base: "column", sm: "row" }}
            gap={{ base: "sm", sm: "lg" }}
            align={"center"}
            mt={"10px"}
          >
            {" "}
            <Link href="/">
              <Image
                src={"/images/Footer/GooglePlay.png"}
                width={200}
                height={55}
                alt="GoogelPlay"
              />
            </Link>
            <Link href="/">
              <Image
                src={"/images/Footer/AppStore.png"}
                width={200}
                height={55}
                alt="Appstore"
              />
            </Link>
          </Flex>
        </div>
      </Flex>
      <Box>
        <Divider color="white" size="sm" />
      </Box>
      <div
        style={{
          backgroundColor: "#276678",
          textAlign: "center",
          padding: "1vh",
          overflowX: "hidden",
          color: "white",
        }}
      >
        &copy; 2023{" "}
        <span>
          <Link
            href="#"
            target="_blank"
            style={{ color: "white", textDecoration: "none" }}
          >
            The Bugger
          </Link>
        </span>{" "}
        . All rights reserved
      </div>
    </Flex>
  );
};

export default Footer;
