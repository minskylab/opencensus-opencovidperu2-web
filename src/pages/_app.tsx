import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import theme from "#root/config/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
