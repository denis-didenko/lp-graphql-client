import { ApolloClient, InMemoryCache } from '@apollo/client';

// GraphQL server
const uri = 'http://localhost:4000/graphql';
export const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
});
