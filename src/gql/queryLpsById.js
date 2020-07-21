import { gql } from '@apollo/client';

export const GET_LPS_BY_IDS = gql`
    query Lps($ids: [ID]) {
        lpsByIds(ids: $ids) {
            lid
            name
        }
    }
`;
