import ApolloClient from 'apollo-boost';

// GraphQL server
const uri = 'http://localhost:4000/graphql';
export const client = new ApolloClient({
    uri,
});
