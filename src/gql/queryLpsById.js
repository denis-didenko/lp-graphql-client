import { gql } from 'apollo-boost';

export const GET_LPS_BY_IDS = gql`
    query Lps($ids: [ID]) {
        lpsByIds(ids: $ids) {
            lid
            name
        }
    }
`;
