import React from 'react';

import { DOMAIN, ADMIN_PAGE, EDIT_PAGE, TESTING_PAGE, STATUS_PAGE, VIEW_PAGE, VIEW_PAGE_TESTING } from '../../config';

const ResultsTable = ({ list = [] }) => {
    if (!list || !list.length) return <p>No found matches</p>;

    function renderRows(rows) {
        return rows.map(({ lid, name }) => {
            return (
                <tr key={lid}>
                    <td>{lid}</td>
                    <td>{name}</td>
                    <td>
                        <a href={DOMAIN + ADMIN_PAGE + lid} className="btn" target="_blank" rel="noopener noreferrer">
                            admin
                        </a>
                    </td>
                    <td>
                        <a href={DOMAIN + EDIT_PAGE + lid} className="btn" target="_blank" rel="noopener noreferrer">
                            edit
                        </a>
                    </td>
                    <td>
                        <a
                            href={'https://www.benaughty.com' + VIEW_PAGE + name + VIEW_PAGE_TESTING}
                            className="btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            preview
                        </a>
                    </td>
                    <td>
                        <a href={DOMAIN + STATUS_PAGE + lid + TESTING_PAGE} className="btn" target="_blank" rel="noopener noreferrer">
                            test
                        </a>
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
                </tr>
            </thead>

            <tbody>{renderRows(list)}</tbody>
        </table>
    );
};

export default React.memo(ResultsTable);
