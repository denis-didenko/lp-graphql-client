import React from 'react';

import { DOMAIN, ADMIN_PAGE, EDIT_PAGE, TESTING_PAGE, STATUS_PAGE, VIEW_PAGE, VIEW_PAGE_TESTING } from '../../config';

function copy(data) {
    const text = data.join('\n');
    navigator.clipboard.writeText(text);
}

const ResultsTable = ({ list = [] }) => {
    if (!list || !list.length) return <p>No found matches</p>;

    const allPreviews = [];

    function renderRows(rows) {
        return rows.map(({ lid, name }) => {
            const adminLink = DOMAIN + ADMIN_PAGE + lid;
            const editLink = DOMAIN + EDIT_PAGE + lid;
            const previewLink = 'https://www.benaughty.com' + VIEW_PAGE + name + VIEW_PAGE_TESTING;
            const testLink = DOMAIN + STATUS_PAGE + lid + TESTING_PAGE;

            allPreviews.push(previewLink);

            return (
                <tr key={lid}>
                    <td>{lid}</td>
                    <td>{name}</td>
                    <td>
                        <a href={adminLink} className="btn" target="_blank" rel="noopener noreferrer">
                            admin
                        </a>
                    </td>
                    <td>
                        <a href={editLink} className="btn" target="_blank" rel="noopener noreferrer">
                            edit
                        </a>
                    </td>
                    <td>
                        <a href={previewLink} className="btn" target="_blank" rel="noopener noreferrer">
                            preview
                        </a>
                    </td>
                    <td>
                        <a href={testLink} className="btn" target="_blank" rel="noopener noreferrer">
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

            <tbody>
                {renderRows(list)}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <button className="btn" onClick={copy(allPreviews)}>
                            copy ALL previews
                        </button>
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
};

export default React.memo(ResultsTable);
