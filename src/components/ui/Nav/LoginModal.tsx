"use client";
import {
  Button,
  Grid,
  Text,
  Divider,
  TextInput,
  PasswordInput,
  Container,
  Flex,
  Group,
} from "@mantine/core";
import Image from "next/image";
import Logo from "public/images/Logo.png";
import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { loginValidation } from "../../../utils/validationSchema";
import { FiMail } from "react-icons/fi";
import { HiOutlineKey } from "react-icons/hi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import {
  handleError,
  handleNotify,
  handleSuccess,
} from "@/src/utils/Notification";
import { forgotPassword } from "@/src/pages/api/auth/forgotPassword";
import { loginPost } from "@/src/pages/api/auth/login";
import { useDispatch, useSelector } from "react-redux";
import {
  forgotClose,
  forgotOpen,
  logIn,
  signupOpen,
} from "@/src/features/auth/authSlice";
import { RootState } from "@/src/utils/dataInterfaces";
interface Props {}

export const LoginModal = (props: Props) => {
  const { push } = useRouter();
  const Quotes = [
    "“Tough time don’t last.      Tough people do.” – Robert H. Schuller",
  ];
  const dispatch = useDispatch();
  const { forgotModal } = useSelector((store: RootState) => store.auth);
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        const { data } = await loginPost(values);

        if (data.token) {
          handleSuccess("Success", "Login Success");
          dispatch(logIn());

          let jwtToken = data.token;
          const [header, payload, signature] = jwtToken.split(".");
          const decodedPayload = JSON.parse(
            Buffer.from(payload, "base64").toString("utf-8")
          );
          console.log(decodedPayload); // Need to save in localhost(token, role and isloggedIn value for access of other pages)

          decodedPayload.hasPassedQuiz === "False"
            ? setTimeout(() => push("/quiz"), 1000)
            : setTimeout(() => push("/dashboard"), 1000);
        }
      } catch (error: any) {
        handleError(error.code, error.message);
      }
    },

    validationSchema: loginValidation,
  });

  const handleForgotPassword = async () => {
    try {
      const { data } = await forgotPassword(values.email);
      handleSuccess(data.status, data.message);
    } catch (error: any) {
      handleError(error.code, error.message);
    }
  };

  return (
    <>
      {!forgotModal && (
        <Grid
          justify="center"
          p={{ base: "1vw" }}
          miw={{ sm: "70vw", md: "45vw" }}
          mih={{ base: "100vh", sm: "30vh" }}
          sx={(theme) => ({
            justifyContent: "center",
            "@media(min-width:62em)": {
              alignItems: "center",
            },
            alignItems: "start",
            textAlign: "center",
            [theme.fn.smallerThan("md")]: {
              overflow: "hidden",
            },
          })}
        >
          <Grid.Col
            mt={4}
            md={4}
            display={{ base: "none", lg: "initial" }}
            bg={"basic-bg.0"}
            sx={{
              borderRadius: "1vw",
            }}
          >
            <br />
            <Image
              src={Logo}
              height={64}
              style={{ objectFit: "contain" }}
              priority
              alt="Logo"
            />
            <Container
              p={"0.5vw"}
              c={"white"}
              h={{ base: "auto", md: "35vh" }}
              bg={"basic-bg.0"}
              mt={"sm"}
            >
              <Text fz={"lg"}>Quote of the Day</Text>
              <Text
                fs={"italic"}
                sx={{
                  height: "100%",
                  width: "100%",
                }}
              >
                {Quotes[0]}
              </Text>
            </Container>
          </Grid.Col>
          <Grid.Col sm={8} pl={"1.5vw"} w={{ lg: "10vw" }}>
            <Text fz={"lg"} fw={"bold"} mb={"md"}>
              Login
            </Text>
            <form onSubmit={handleSubmit}>
              <TextInput
                type="email"
                placeholder="Email"
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
              <br />
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
              <div>
                <Group position="right" my={"sm"}>
                  <Text fz="sm" sx={{ justifyContent: "right" }}>
                    <a
                      href="#"
                      style={{ color: "#1687A7", textDecoration: "none" }}
                      onClick={() => {
                        dispatch(forgotOpen());
                      }}
                    >
                      Forgot Password?
                    </a>
                  </Text>
                </Group>
                <Button
                  type="submit"
                  w={"80%"}
                  sx={{
                    objectFit: "contain",
                  }}
                >
                  <Text fz={{ sm: "md" }} fw={{ base: "initial" }}>
                    Login
                  </Text>
                </Button>
              </div>
            </form>{" "}
            <Divider
              my="sm"
              label="Or"
              color="basic-bg.4"
              labelPosition="center"
            />
            <Button
              type="submit"
              miw={"80%"}
              leftIcon={<FcGoogle size={"25"} />}
            >
              <Text fz={{ sm: "md" }} fw={{ base: "initial" }}>
                Login with Google
              </Text>
            </Button>
            <br />
            <Text fz="sm" mt={"sm"}>
              Don&apos;t have an account? &nbsp;
              <a
                href="#"
                style={{ color: "#1687A7", textDecoration: "none" }}
                onClick={() => dispatch(signupOpen())}
              >
                Register Now
              </a>
            </Text>
          </Grid.Col>
        </Grid>
      )}
      {forgotModal && (
        <Flex
          direction={"column"}
          ta={"center"}
          p={"1vw"}
          mih={{ base: "100vh", sm: "20vh" }}
          justify={"space-between"}
          w={"35vw"}
        >
          <form>
            <Text fw={"bold"} fz={"xl"} mb={"md"}>
              Forgot Password
            </Text>
            <Text mb={"sm"}>
              Please provide the email address that you used when you signed up
              for your account.
            </Text>
            <TextInput
              placeholder="Your email"
              name="email"
              icon={<FiMail color={"black"} />}
              onChange={handleChange}
              value={values.email}
            />
            <Text my={"sm"}>
              We will send you an email that will allow you to reset your
              password.
            </Text>
            <Button
              w={"200px"}
              onClick={() => {
                handleForgotPassword();
              }}
            >
              <Text fz={{ sm: "md" }} fw={{ base: "initial" }}>
                Send Email
              </Text>
            </Button>
          </form>
          <Group position="left" mb={{ base: "20px", md: "0" }}>
            <Text
              fz={{ base: "md", md: "sm" }}
              sx={{ justifyContent: "right" }}
            >
              <a
                href="#"
                style={{ color: "#1687A7", textDecoration: "none" }}
                onClick={() => {
                  dispatch(forgotClose());
                }}
              >
                <BsArrowLeft /> &nbsp; Go Back
              </a>
            </Text>
          </Group>
        </Flex>
      )}
    </>
  );
};
