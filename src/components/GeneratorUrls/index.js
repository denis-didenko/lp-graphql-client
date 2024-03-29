import React from 'react';

import useValues from '../../hooks/useValues';
import useFetch from '../../hooks/useFetch';

import Loader from '../Loader';
import ResultsTable from '../ResultsTable';
import './generator.css';

const GeneratorUrls = () => {
	const { select, onChangeSelect, textarea, onChangeTextarea, values, onSubmitForm } = useValues();
	const { data, error, loading } = useFetch(select, values);

	if (error) return <div>{String(error)}</div>;
	if (loading) return <Loader />;

	const list = data.lpsByIds || data.lpsByNames || data.lpsByUrls;

	return (
		<>
			<form action=''>
				<div className='form-item'>
					<label>Filter by</label>
					<select className='generator-filter' value={select} onChange={onChangeSelect}>
						<option value='ids'>Lid</option>
						<option value='names'>Name</option>
						<option value='urls-web'>Url web</option>
						<option value='urls-mob'>Url mob</option>
					</select>
				</div>
				<div className='form-item'>
					<label>List name/lid/url</label>
					<textarea className='generator-field' value={textarea} onChange={onChangeTextarea}></textarea>
				</div>

				<button className='generator-submit' type='submit' onClick={(e) => onSubmitForm(e, textarea)}>
					Submit
				</button>
			</form>
			<ResultsTable list={list} />
		</>
	);
};

export default GeneratorUrls;
