import { useReducer, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_LPS_BY_IDS, GET_LPS_BY_NAMES, GET_LPS_BY_URLS } from '../../gql/queryLp';

function fetchReducer(state, action) {
    switch (action.type) {
        case 'ids':
            return {
                queryName: GET_LPS_BY_IDS,
                queryVariable: 'ids',
                platform: 'mob',
            };

        case 'names':
            return {
                queryName: GET_LPS_BY_NAMES,
                queryVariable: 'names',
                platform: 'mob',
            };

        case 'urls-web':
            return {
                queryName: GET_LPS_BY_URLS,
                queryVariable: 'urls',
                platform: 'web',
            };

        case 'urls-mob':
            return {
                queryName: GET_LPS_BY_URLS,
                queryVariable: 'urls',
                platform: 'mob',
            };

        default:
            return state;
    }
}

const useFetch = (name, values) => {
    const [state, dispatch] = useReducer(fetchReducer, {
        queryName: GET_LPS_BY_IDS,
        queryVariable: 'ids',
        platform: 'mob',
    });

    const { data, error, loading } = useQuery(state.queryName, {
        variables: { [state.queryVariable]: values, platform: state.platform },
    });

    useEffect(() => {
        dispatch({ type: name });
    }, [name, values]);

    return {
        data,
        error,
        loading,
    };
};

export default useFetch;
