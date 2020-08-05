import { useReducer, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_LPS_BY_IDS, GET_LPS_BY_NAMES } from '../../gql/queryLp';

function fetchReducer(state, action) {
    switch (action.type) {
        case 'ids':
            return {
                queryName: GET_LPS_BY_IDS,
                variable: 'ids',
            };

        case 'names':
            return {
                queryName: GET_LPS_BY_NAMES,
                variable: 'names',
            };

        case 'urls':
            return {};

        default:
            return state;
    }
}

const useFetch = (name, values) => {
    const [state, dispatch] = useReducer(fetchReducer, {
        queryName: GET_LPS_BY_IDS,
        variable: 'ids',
    });
    const { data, error, loading } = useQuery(state.queryName, { variables: { [state.variable]: values } });

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
