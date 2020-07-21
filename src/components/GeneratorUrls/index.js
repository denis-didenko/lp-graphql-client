import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_LPS_BY_IDS } from '../../gql/queryLpsById';

import useIds from './useIds';
import ResultsTable from './resultsTable';
import './generator.css';

const GeneratorUrls = () => {
    const { ids, onChangeIds, fieldValue, onChangeField } = useIds();
    const { data, error, loading } = useQuery(GET_LPS_BY_IDS, { variables: { ids } });

    if (error) return <p>Error</p>;
    if (loading) return <p>Loading</p>;

    return (
        <form action="">
            <textarea className="generator-field" value={fieldValue} onChange={onChangeField}></textarea>
            <button className="generator-submit" type="submit" onClick={e => onChangeIds(e, fieldValue)}>
                Submit
            </button>
            <ResultsTable ids={data.lpsByIds} />
        </form>
    );
};

export default GeneratorUrls;
