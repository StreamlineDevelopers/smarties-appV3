import React from 'react';
import TablecelldivItem316 from './TablecelldivItem316';
import TablecelldivItem309 from './TablecelldivItem309';
import WcheckboxItem311 from './WcheckboxItem311';

const TablerowItem320 = ({ name, id, dataName, htmlFor }) => {
  return (
    <div className="table-row">
      <TablecelldivItem316 title="sample.txt" />
      <TablecelldivItem309 label="12 KB" />
      <TablecelldivItem309 label="May 6, 2025" />
      <div className="table-cell-div _w-5">
        <WcheckboxItem311
          name={name || 'check-add-file'}
          id={id || 'check-add-file'}
          dataName={dataName || 'check add file'}
          htmlFor={htmlFor || 'check-add-file'}
        />
      </div>
    </div>
  );
};

export default TablerowItem320;
