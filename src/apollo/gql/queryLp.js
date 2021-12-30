import { gql } from '@apollo/client';

export const GET_LP = gql`
    query Lp($id: ID!) {
        lp(id: $id) {
            lid
            name
        }
    }
`;

export const GET_LPS_BY_IDS = gql`
    query LpsByIds($ids: [ID]!) {
        lpsByIds(ids: $ids) {
            lid
            name
        }
    }
`;

export const GET_LPS_BY_NAMES = gql`
    query LpsByNames($names: [String]!) {
        lpsByNames(names: $names) {
            lid
            name
        }
    }
`;

export const GET_LPS_BY_URLS = gql`
    query LpsByUrls($urls: [String]!, $platform: String!) {
        lpsByUrls(urls: $urls, platform: $platform) {
            lid
            name
        }
    }
`;

export const SAVE_SCREENSHOT = gql`
    mutation SaveScreenshot($url: String!) {
        saveScreenshot(url: $url) {
            lid
            name
        }
    }
`;
