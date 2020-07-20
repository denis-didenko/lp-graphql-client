import React, { useState } from 'react';

import { useQuery } from 'react-apollo';
import { GET_LPS_BY_IDS } from '../../queries/getLp';

import ResultsTable from './resultsTable';
import './generator.css';

const GeneratorUrls = ({ getIds }) => {
  const [fieldValue, setFieldValue] = useState('');
  const [ids, setIds] = useState([]);

  const { data, error, loading } = useQuery(GET_LPS_BY_IDS, { variables: { ids } });
  //console.log('data: ', data);
  //console.log('error: ', error);
  //console.log('loading: ', loading);

  function onChangeIds(e, list) {
    e.preventDefault();
    const splitted = list.split(/\n|\s/).filter(Boolean);

    setIds(splitted);
  }

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;

  return (
    <form action="">
      <textarea className="generator-field" value={fieldValue} onChange={(e) => setFieldValue(e.target.value)}></textarea>
      <button className="generator-submit" type="submit" onClick={(e) => onChangeIds(e, fieldValue)}>
        Submit
      </button>
      <ResultsTable ids={data.lpsByIds} />
    </form>
  );
};

export default GeneratorUrls;
