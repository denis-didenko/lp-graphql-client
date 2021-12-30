import React from 'react';

import Loader from '../Loader';
import useScreenshot from './useScreenshot';
import { DOMAIN, ADMIN_PAGE, EDIT_PAGE, TESTING_PAGE, STATUS_PAGE, VIEW_PAGE, VIEW_PAGE_TESTING } from '../../config/index.js';
import { copy } from '../../utils';

const ResultsTable = ({ list = [] }) => {
	const { saveScreenshot, loading, error } = useScreenshot();

	if (!list || !list.length) return <p>No found matches</p>;

	const allPreviews = [];
	const allNames = [];
	const allTestingLinks = [];
	const allEditLinks = [];

	const openLpsInNewTabs = (links) => {
		links.forEach((link) => {
			window.open(link, '_blank');
		});
	};

	function renderRows(rows) {
		return rows.map(({ lid, name }) => {
			const adminLink = DOMAIN + ADMIN_PAGE + lid;
			const editLink = DOMAIN + EDIT_PAGE + lid;
			const previewTestLink = 'https://m.benaughty.com' + VIEW_PAGE + name + VIEW_PAGE_TESTING;
			const testLink = DOMAIN + STATUS_PAGE + lid + TESTING_PAGE;

			allPreviews.push(previewTestLink);
			allNames.push(name);
			allTestingLinks.push(testLink);
			allEditLinks.push(editLink);

			return (
				<tr key={lid}>
					<td>{lid}</td>
					<td>{name}</td>
					<td>
						<a href={adminLink} className='btn' target='_blank' rel='noopener noreferrer'>
							admin
						</a>
					</td>
					<td>
						<a href={editLink} className='btn' target='_blank' rel='noopener noreferrer'>
							edit
						</a>
					</td>
					<td>
						<a href={previewTestLink} className='btn' target='_blank' rel='noopener noreferrer'>
							preview
						</a>
					</td>
					<td>
						<a href={testLink} className='btn' target='_blank' rel='noopener noreferrer'>
							test
						</a>
					</td>
					<td>
						{loading ? (
							<Loader />
						) : (
							<button className='btn' onClick={(e) => saveScreenshot({ variables: { url: previewTestLink } })}>
								save screenshot
							</button>
						)}
					</td>
				</tr>
			);
		});
	}

	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Admin</th>
					<th>Edit</th>
					<th>Preview</th>
					<th>Testing</th>
					<th>Screenshot</th>
				</tr>
			</thead>

			<tbody>
				{renderRows(list)}
				<tr>
					<td></td>
					<td>
						<button className='btn' onClick={() => copy(allNames)}>
							copy ALL names
						</button>
					</td>
					<td></td>
					<td>
						<button className='btn' onClick={() => openLpsInNewTabs(allEditLinks)}>
							open ALL edit lps
						</button>
					</td>
					<td>
						<button className='btn' onClick={() => copy(allPreviews)}>
							copy ALL previews
						</button>
					</td>
					<td>
						<button className='btn' onClick={() => openLpsInNewTabs(allTestingLinks)}>
							send ALL to testing
						</button>
					</td>
					<td></td>
				</tr>
			</tbody>
		</table>
	);
};

export default React.memo(ResultsTable);
