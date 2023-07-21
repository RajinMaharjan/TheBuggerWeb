import {
  AppShell,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Paper,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../utils/validationSchema";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import {
  handleError,
  handleNotify,
  handleSuccess,
} from "../utils/Notification";
import { resetPassword } from "./api/auth/resetPassword";

interface Props {
  token: string;
  email: string;
}

const ResetPassword = (props: Props) => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordValidation,
    onSubmit: () => {
      resetSubmit();
    },
  });
  const router = useRouter();
  const { push } = router;
  const { token, email } = router.query;

  const resetSubmit = async () => {
    try {
      const actualToken = (token as string).replace(/ /g, "+");
      const { data } = await resetPassword({
        ...values,
        email: email,
        token: actualToken,
      });

      handleSuccess(data.status, data.message);
      data.status === "Success" && push("/");
    } catch (error: any) {
      handleError(error.code, error.message);
    }
  };
  return (
    <>
      <Flex bg={"basic-bg.3"} h={"100vh"} justify={"center"} align={"center"}>
        <Paper
          shadow="xl"
          radius={"md"}
          ta={"center"}
          w={{ base: "100%", sm: "50%", md: "40%" }}
          h={{ base: "100vh", sm: "45vh", md: "80vh", lg: "60vh" }}
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
          <Text fz={"xl"} fw={"bold"} mb={"md"}>
            Reset Password:{" "}
          </Text>{" "}
          <Text fz={"xl"} fw={"inherit"} mb={"md"}>
            {email}
          </Text>
          <Flex justify={"center"}>
            <form onSubmit={handleSubmit}>
              <Flex justify={"center"} direction={"column"}>
                <Box mb={"md"}>
                  <PasswordInput
                    placeholder="New Password"
                    w={{ base: "300px", sm: "300px" }}
                    size="md"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />{" "}
                  {touched.password && errors.password ? (
                    <Text fz={"xs"} sx={{ textAlign: "left" }} color="red">
                      {errors.password}
                    </Text>
                  ) : null}
                </Box>
                <Box mb={"md"}>
                  <PasswordInput
                    placeholder="Confirm New Password"
                    w={"100%"}
                    size="md"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={values.confirmPassword}
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <Text fz={"xs"} sx={{ textAlign: "left" }} color="red">
                      {errors.confirmPassword}
                    </Text>
                  ) : null}
                </Box>
              </Flex>
              <Button type="submit">Submit</Button>
            </form>
          </Flex>
        </Paper>
      </Flex>
    </>
  );
};

export default ResetPassword;
