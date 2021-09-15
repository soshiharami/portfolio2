import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://portfolioapi.soshiharami.com/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
