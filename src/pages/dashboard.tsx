import { AppShell, Header, ScrollArea } from "@mantine/core";
import React, { useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Landing1 from "../components/Landing/Landing1";
import Landing2 from "../components/Landing/Landing2";
import Footer from "../components/Layout/Footer";
import Sidebar from "../components/Layout/Sidebar";
import ProjectStatus from "../components/Dashboard/ProjectStatus";

type Props = {};

export default function Dashboard({}: Props) {
  const [buttonSelection, setButtonSelection] = useState<number>(0);
  return (
    <AppShell
      navbar={<Sidebar setButtonSelection={setButtonSelection} />}
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
      {buttonSelection === 0 && (
        <div>
          <ProjectStatus />
        </div>
      )}
      {buttonSelection === 1 && <div>polo</div>}
      {buttonSelection === 2 && <div>paolo</div>}
      {buttonSelection === 3 && <div>solo</div>}
    </AppShell>
  );
}
