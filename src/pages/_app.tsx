import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useState } from "react";

import theme from "#root/config/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [currentMode, setCurrentMode] = useState("");
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} currentMode={currentMode} setCurrentMode={setCurrentMode} />
    </ChakraProvider>
  );
};

export default MyApp;
