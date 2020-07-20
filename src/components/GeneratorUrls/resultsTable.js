import React from 'react';

import { DOMAIN, ADMIN_PAGE, EDIT_PAGE, TESTING_PAGE, STATUS_PAGE } from '../../config';

const ResultsTable = ({ ids = [] }) => {
  if (!ids.length) return <p>No found matches</p>;
  console.log('ResultsTable: ', ids);

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
          <th>Testing</th>
        </tr>
      </thead>

      <tbody>{renderRows(ids)}</tbody>
    </table>
  );
};

export default React.memo(ResultsTable);
