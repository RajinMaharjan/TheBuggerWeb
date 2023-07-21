"use client";
import { AppShell, Container, Flex, Grid, Group } from "@mantine/core";
import Landing1 from "../components/Landing/Landing1";
import Landing2 from "../components/Landing/Landing2";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

export default function Home() {
  return (
    <>
      <AppShell
        //   navbar={<Navbar />}
        header={<Navbar />}
        footer={<Footer />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Landing1 />
        <Landing2 />
      </AppShell>
    </>
  );
}
