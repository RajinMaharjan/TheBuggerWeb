"use client";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  Modal,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure, useViewportSize, useMediaQuery } from "@mantine/hooks";
import Logo from "public/images/Logo.png";
import { LoginModal } from "../ui/Nav/LoginModal";
import { Signup } from "../ui/Nav/SignupModal";
import { VscThreeBars } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/router";
import { AiOutlineForm } from "react-icons/ai";
import { MdLockReset, MdOutlineQuiz } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  logOut,
  signupOpen,
  loginOpen,
  loginClose,
  signupClose,
} from "@/src/features/auth/authSlice";
import { RootState } from "@/src/utils/dataInterfaces";
interface Props {}

const Navbar = ({}: Props) => {
  const dispatch = useDispatch();
  const { height, width } = useViewportSize();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 50em)");
  const icon_height: number = height / 13;
  const icon_width: number = width / 13;
  const { push } = useRouter();

  let param: number = height > width ? icon_width : icon_height;
  const { isLoggedIn, loginModalOpen, signupModalOpen } = useSelector(
    (store: RootState) => store.auth
  );
  return (
    <>
      <Modal
        opened={loginModalOpen}
        onClose={() => {
          dispatch(loginClose());
        }}
        size={"auto"}
        fullScreen={isMobile}
        withCloseButton={false}
        centered
        styles={{
          content: { overflow: "hidden !important" },
          body: {
            backgroundColor: theme.colors["basic-bg"][2],
          },
        }}
      >
        <LoginModal />
      </Modal>
      <Modal
        bg={"basic-bg.2"}
        opened={signupModalOpen}
        onClose={() => {
          dispatch(signupClose());
        }}
        withCloseButton={false}
        size={"55%"}
        fullScreen={isMobile}
        styles={{
          content: { overflow: "hidden !important" },
          body: {
            backgroundColor: theme.colors["basic-bg"][2],
          },
        }}
        centered
      >
        <Signup />
      </Modal>
      <Flex
        px={"5vw"}
        justify={"space-between"}
        align={"center"}
        sx={{
          backgroundColor: "#276678",
          width: "100%",
          position: isLoggedIn ? "initial" : "fixed",
        }}
        style={{
          zIndex: "1",
        }}
      >
        <Box p={"1vw"}>
          <Link href="/">
            <Image
              alt="thebugger_logo"
              src={Logo}
              height={param}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </Box>

        {!isLoggedIn && (
          <Box>
            <Button
              radius="xs"
              color="basic-bg.2"
              size="md"
              sx={{ color: "black" }}
              mr="1vw"
              onClick={() => {
                dispatch(loginOpen());
              }}
            >
              <Text fz={{ base: "md" }}>Login</Text>
            </Button>
            <Button
              radius="xs"
              color="basic-bg.2"
              size="md"
              sx={{ color: "black" }}
              mr={width / 100}
              onClick={() => dispatch(signupOpen())}
            >
              <Text fz={{ base: "md" }}>Sign Up</Text>
            </Button>
          </Box>
        )}
        {isLoggedIn && (
          <Menu shadow="md">
            <Menu.Target>
              <Avatar color="blue">
                <VscThreeBars />
              </Avatar>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item
                color="black"
                icon={<MdOutlineQuiz />}
                onClick={() => {
                  push("/quiz");
                }}
              >
                Quiz
              </Menu.Item>
              <Menu.Item
                color="black"
                icon={<AiOutlineForm />}
                onClick={() => {
                  push("/additionalInfo");
                }}
              >
                Additional Info
              </Menu.Item>
              <Menu.Item
                color="black"
                icon={<MdLockReset />}
                onClick={() => {
                  push("/resetPassword");
                }}
              >
                Reset Password
              </Menu.Item>
              <Menu.Item
                color="black"
                icon={<RxDashboard />}
                onClick={() => {
                  push("/dashboard");
                }}
              >
                Dashboard
              </Menu.Item>

              <Menu.Item
                color="black"
                icon={<RxDashboard />}
                onClick={() => {
                  push("/emailVerified");
                }}
              >
                Email Verified
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                color="red"
                icon={<BiLogOut />}
                onClick={() => {
                  dispatch(logOut());
                  push("/");
                }}
              >
                Log Out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )}
      </Flex>
    </>
  );
};

export default Navbar;
