import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

import theme from "#root/config/theme";
import { useStore } from "#root/store";
import { Provider as URQLProvider, createClient } from "urql";

const client = createClient({
    url: "https://hasura.opencovid2.tk/v1/graphql",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    const store = useStore(pageProps.initialReduxState);

    return (
        <URQLProvider value={client}>
            <ChakraProvider resetCSS theme={theme}>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ChakraProvider>
        </URQLProvider>
    );
};

export default MyApp;
