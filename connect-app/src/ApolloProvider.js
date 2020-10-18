import React from "react";
import App from "./App";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

const httplink = createHttpLink({
  uri: "http://localhost:5000",
});

const client = new ApolloClient({
  link: httplink,
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
