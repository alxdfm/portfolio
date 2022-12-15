import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

const client = new ApolloClient({
  uri: 'https://sa-east-1.cdn.hygraph.com/content/clbmxt7gc0mai01uhcttzdtiw/master?query=%7B%0A%09posts%20%7B%0A%20%20%20%20title%20content%20createdAt%0A%20%20%7D%0A%7D',
  cache: new InMemoryCache(),
});

export default client;
