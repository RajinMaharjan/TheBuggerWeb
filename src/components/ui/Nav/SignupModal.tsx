"use client";
import {
  Button,
  Checkbox,
  Grid,
  Group,
  PasswordInput,
  Text,
  Container,
  TextInput,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/public/images/Logo.png";
import { useFormik } from "formik";
import { BsFillPersonFill, BsTelephone } from "react-icons/bs";
import { signUpValidation } from "../../../utils/validationSchema";
import { CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { HiOutlineKey } from "react-icons/hi";
import { useRouter } from "next/router";
import { handleError, handleSuccess } from "@/src/utils/Notification";
import { registerPost } from "@/src/pages/api/auth/register";
import { loginOpen } from "@/src/features/auth/authSlice";
import { useDispatch } from "react-redux";

interface Props {}

export const Signup = (props: Props) => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      role: "Tester",
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      try {
        const { data } = await registerPost(values);
        handleSuccess(data.status, data.message);
        setTimeout(() => dispatch(loginOpen()), 2000);
      } catch (error: any) {
        handleError("Error", error.response.data.message);
      }
    },
    validationSchema: signUpValidation,
  });

  const [agreement, setAgreement] = useState(false);
  return (
    <Grid
      p={"1vw"}
      mih={{ base: "100vh", sm: "30vh" }}
      sx={(theme) => ({
        justifyContent: "center",
        textAlign: "center",
        [theme.fn.smallerThan("md")]: {
          overflow: "hidden",
        },
      })}
      gutter={"xl"}
    >
      <Grid.Col
        xs={1}
        md={4}
        bg={"basic-bg.0"}
        sx={{
          borderRadius: "1vw",
        }}
        display={{ base: "none", md: "initial" }}
      >
        <Image
          src={Logo}
          height={64}
          style={{ objectFit: "contain" }}
          priority
          alt="Logo"
        />
        <Container p={"0.5vw"} c={"white"} mt={"10px"}>
          <Text fz="sm" h={"100%"} w={"100%"}>
            Empower your QA career with The Bugger . Join our platform and
            showcase your qualifications as a QA expert.
            <br />
            Join us for free and unlock limitless opportunities in quality
            assurance. Your future is calling at The Bugger. Begin your journey
            today and seize the possibilities!
          </Text>
        </Container>
      </Grid.Col>
      <Grid.Col xs={12} md={8} maw={450} pl={"1.5vw"}>
        <Text fz={"lg"} fw={"bold"} mb={"md"}>
          Sign Up
        </Text>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1vw" }}>
            <TextInput
              placeholder="First Name"
              name="firstname"
              icon={<CgProfile color={"black"} />}
              onChange={handleChange}
              value={values.firstname}
              withAsterisk
            />
            {touched.firstname && errors.firstname ? (
              <Text fz={"xs"} sx={{ textAlign: "left" }} color="red">
                {errors.firstname}
              </Text>
            ) : null}
          </div>
          <div style={{ marginBottom: "1vw" }}>
            <TextInput
              placeholder="Last Name"
              name="lastname"
              icon={<CgProfile color={"black"} />}
              onChange={handleChange}
              value={values.lastname}
              withAsterisk
            />
            {touched.lastname && errors.lastname ? (
              <Text fz={"xs"} sx={{ textAlign: "left" }} color="red">
                {errors.lastname}
              </Text>
            ) : null}
          </div>
          <div style={{ marginBottom: "1vw" }}>
            <TextInput
              placeholder="Your email"
              name="email"
              icon={<FiMail color={"black"} />}
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email ? (
              <Text fz={"xs"} sx={{ textAlign: "left" }} color="red">
                {errors.email}
              </Text>
            ) : null}
          </div>
          <div style={{ marginBottom: "1vw" }}>
            <TextInput
              placeholder="Phone Number"
              name="phoneNumber"
              icon={<BsTelephone color={"black"} />}
              onChange={handleChange}
              value={values.phoneNumber}
            />
            {touched.phoneNumber && errors.phoneNumber ? (
              <Text fz={"xs"} sx={{ textAlign: "left" }} color="red">
                {errors.phoneNumber}
              </Text>
            ) : null}
          </div>
          <div style={{ marginBottom: "1vw" }}>
            <PasswordInput
              placeholder="Password"
              name="password"
              icon={<HiOutlineKey color={"black"} />}
              onChange={handleChange}
              value={values.password}
            />
            {touched.password && errors.password ? (
              <Text fz={"xs"} sx={{ textAlign: "left" }} color="red">
                {errors.password}
              </Text>
            ) : null}
          </div>
          <div style={{ marginBottom: "1vw" }}>
            <PasswordInput
              placeholder="Confirm Password"
              name="confirmPassword"
              icon={<HiOutlineKey color={"black"} />}
              onChange={handleChange}
              value={values.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword ? (
              <Text fz={"xs"} sx={{ textAlign: "left" }} color="red">
                {errors.confirmPassword}
              </Text>
            ) : null}
          </div>
          <div style={{ textAlign: "center" }}>
            <Text fz="sm" mb={"sm"}>
              <input
                type="checkbox"
                name="agreement"
                onClick={() => {
                  setAgreement(!agreement);
                }}
              />
              I have read and agree to the &nbsp;
              <span>
                <Link
                  href="/privacyPolicy"
                  style={{ color: "#1687A7", textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/termsOfUse"
                  style={{ color: "#1687A7", textDecoration: "none" }}
                >
                  {" "}
                  Terms of Use
                </Link>{" "}
              </span>
            </Text>

            <Button
              mb={"xs"}
              type="submit"
              disabled={!agreement}
              sx={{
                objectFit: "contain",
                width: "80%",
              }}
            >
              Sign Up
            </Button>
          </div>
        </form>
        <Text fz="sm">
          Already have an account? &nbsp;
          <a
            href="#"
            onClick={() => dispatch(loginOpen())}
            style={{
              color: "#1687A7",
              border: "none",
              textDecoration: "none",
              background: "none",
            }}
          >
            Sign In
          </a>
        </Text>
      </Grid.Col>
    </Grid>
  );
};
