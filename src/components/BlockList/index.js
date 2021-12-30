import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import {
	DOMAIN,
	ADMIN_BLOCK,
	STATUS_BLOCK,
	VIEW_BLOCK,
	EDIT_BLOCK,
	TESTING_BLOCK,
	TESTING_SUCCESS_BLOCK,
	PUBLISH_BLOCK,
} from '../../config/index.js';
import { blocksBfNew, blocksBfOld, blocksJs } from './data';

const BlocksList = () => {
	function renderThead() {
		return (
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Admin</th>
					<th>View</th>
					<th>Edit</th>
					<th>Testing</th>
					<th>Testing Success</th>
					<th>Publish</th>
				</tr>
			</thead>
		);
	}

	function renderRows(rows) {
		const sorted = rows.sort((a, b) => (a.name > b.name ? 1 : -1));

		return sorted.map(({ lid, name }) => {
			return (
				<tr key={lid}>
					<td>{lid}</td>
					<td>{name}</td>
					<td>
						<a href={DOMAIN + ADMIN_BLOCK + lid} className='btn' target='_blank' rel='noopener noreferrer'>
							admin
						</a>
					</td>
					<td>
						<a href={DOMAIN + VIEW_BLOCK + lid} className='btn' target='_blank' rel='noopener noreferrer'>
							view
						</a>
					</td>
					<td>
						<a href={DOMAIN + EDIT_BLOCK + lid} className='btn' target='_blank' rel='noopener noreferrer'>
							edit
						</a>
					</td>
					<td>
						<a href={DOMAIN + STATUS_BLOCK + lid + TESTING_BLOCK} className='btn' target='_blank' rel='noopener noreferrer'>
							test
						</a>
					</td>
					<td>
						<a href={DOMAIN + STATUS_BLOCK + lid + TESTING_SUCCESS_BLOCK} className='btn' target='_blank' rel='noopener noreferrer'>
							test_success
						</a>
					</td>
					<td>
						<a href={DOMAIN + STATUS_BLOCK + lid + PUBLISH_BLOCK} className='btn' target='_blank' rel='noopener noreferrer'>
							publish
						</a>
					</td>
				</tr>
			);
		});
	}

	return (
		<Tabs>
			<TabList>
				<Tab> JS regform</Tab>
				<Tab> Baseform (new parser)</Tab>
				<Tab> Baseform (old parser)</Tab>
			</TabList>

			<TabPanel>
				<table>
					{renderThead()}
					<tbody>{renderRows(blocksJs)}</tbody>
				</table>
			</TabPanel>
			<TabPanel>
				<table>
					{renderThead()}
					<tbody>{renderRows(blocksBfNew)}</tbody>
				</table>
			</TabPanel>
			<TabPanel>
				<table>
					{renderThead()}
					<tbody>{renderRows(blocksBfOld)}</tbody>
				</table>
			</TabPanel>
		</Tabs>
	);
};

export default BlocksList;
