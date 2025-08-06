import React from 'react';
import TablecelldivItem287 from './TablecelldivItem287';

const TableheaderItem = ({ divText, divText1 }) => {
  return (
    <div className="table-header">
      <TablecelldivItem287 divText="Name" />
      <TablecelldivItem287 divText={divText || 'ID'} />
      <TablecelldivItem287 divText={divText1 || 'Date Created'} />
      <div className="table-cell-div _w-5"></div>
    </div>
  );
};

export default TableheaderItem;
