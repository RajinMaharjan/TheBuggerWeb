import { Inter } from "next/font/google";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Provider } from "react-redux";
import { store } from "../store";
const inter = Inter({ subsets: ["latin"] });
export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <main className={inter.className}>
      <Head>
        <title>TheBugger</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            components: {
              Button: {
                classNames: { label: inter.className },
                defaultProps: {
                  color: "basic-bg.0",
                  size: "md",
                  radius: "sm",
                },
              },
              Modal: {
                classNames: {
                  body: inter.className,
                },
              },
            },
            fontFamily: "inter.style.fontFamily",
            colorScheme: "light",
            colors: {
              "basic-bg": [
                "#276678",
                "#1687A7",
                "#D3E0EA",
                "#F6F5F5",
                "#000000",
              ],
            },
          }}
        >
          <Notifications />
          <Component {...pageProps} />
        </MantineProvider>
      </Provider>
    </main>
  );
}
