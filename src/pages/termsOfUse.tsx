import React from "react";
import { AppShell, Container } from "@mantine/core";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
interface Props {}

const TermsOfUse = (props: Props) => {
  return (
    <AppShell
      padding={0}
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
      <Container fluid bg={"basic-bg.3"} mih={"90vh"}>
        Terms of Use.
      </Container>
    </AppShell>
  );
};

export default TermsOfUse;
