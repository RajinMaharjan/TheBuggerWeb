import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  handleError,
  handleNotify,
  handleSuccess,
} from "../utils/Notification";
import { Box, Center, Flex, Loader, Paper } from "@mantine/core";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { verifyEmail } from "./api/auth/emailVerification";

interface Props {}

const EmailVerified = (props: Props) => {
  const [error, setError] = useState<boolean>(true);
  const [resultOut, setResultOut] = useState<boolean>(false);
  const router = useRouter();
  const { push } = router;

  useEffect(() => {
    const { token, email } = router.query;
    if (token) {
      const actualToken = (token as string).replace(/ /g, "+");
      verify(actualToken, email);
    }
  }, [router]);

  const verify = async (
    token: string | string[] | undefined,
    email: string | string[] | undefined
  ) => {
    try {
      const { data } = await verifyEmail(token, email);
      setResultOut(true);
      data.status === "Success" ? setError(false) : setError(true);
      handleSuccess(data.status, data.message);
    } catch (error: any) {
      setResultOut(true);
      handleError("Error", error.response.data.message);
    }
  };

  return (
    <>
      {!resultOut && (
        <>
          <Flex
            bg={"basic-bg.3"}
            h={"100vh"}
            justify={"center"}
            align={"center"}
          >
            <Paper
              w={{ base: "100%", md: "30%" }}
              h={{ base: "100%", md: "auto" }}
              shadow="xl"
              radius={"md"}
              ta={"center"}
              pb={"xl"}
              sx={{ border: "8px solid", borderColor: "#276678" }}
            >
              <Flex bg={"basic-bg.0"} justify={"center"} mb={"lg"} py={"5px"}>
                <Image
                  src={"/images/Logo.png"}
                  alt="logo"
                  width={100}
                  height={75}
                />
              </Flex>

              <Loader size="xl" />
            </Paper>
          </Flex>
        </>
      )}
      {resultOut && (
        <>
          {!error && (
            <Flex
              bg={"basic-bg.3"}
              h={"100vh"}
              justify={"center"}
              align={"center"}
            >
              <Paper
                w={{ base: "100%", md: "30%" }}
                h={{ base: "100%", md: "auto" }}
                shadow="xl"
                radius={"md"}
                ta={"center"}
                pb={"xl"}
                onClick={() => push("/")}
                sx={{
                  border: "8px solid darkgreen",
                  justifyContent: "center",
                }}
              >
                <Flex bg={"darkgreen"} justify={"center"} mb={"lg"} py={"5px"}>
                  <Image
                    src={"/images/Logo.png"}
                    alt="logo"
                    width={100}
                    height={75}
                  />
                </Flex>
                <Box mt={{ base: "25vh", md: "0" }}>
                  <AiOutlineCheckCircle size={100} color="green" />
                  <br />
                  Email Verified Successfully.
                </Box>
              </Paper>
            </Flex>
          )}
          {error && (
            <Flex
              bg={"basic-bg.3"}
              h={"100vh"}
              justify={"center"}
              align={"center"}
            >
              <Paper
                w={{ base: "100%", md: "30%" }}
                h={{ base: "100%", md: "auto" }}
                shadow="xl"
                radius={"md"}
                ta={"center"}
                pb={"xl"}
                sx={{
                  border: "8px solid darkred",
                  justifyContent: "center",
                }}
              >
                <Flex bg={"darkred"} justify={"center"} mb={"lg"} py={"5px"}>
                  <Image
                    src={"/images/Logo.png"}
                    alt="logo"
                    width={100}
                    height={75}
                  />
                </Flex>
                <Box mt={{ base: "25vh", md: "0" }}>
                  <AiOutlineCloseCircle size={100} color="darkred" />
                  <br />
                  Email Not Verified.
                </Box>
              </Paper>
            </Flex>
          )}
        </>
      )}
    </>
  );
};

export default EmailVerified;
