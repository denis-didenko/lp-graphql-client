import { gql } from '@apollo/client';

export const GET_LP = gql`
    query Lp($id: ID) {
        lp(id: $id) {
            lid
            name
        }
    }
`;
