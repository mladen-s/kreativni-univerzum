import { ApolloClient, InMemoryCache } from "@apollo/client";

// setup Apollo client
const client = new ApolloClient({
  uri: "https://kreativni-univerzum-cicd.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
