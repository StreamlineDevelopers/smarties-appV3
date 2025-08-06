import React from 'react';
import TablecelldivItem316 from './TablecelldivItem316';
import TablecelldivItem309 from './TablecelldivItem309';
import TablecelldivItem289 from './TablecelldivItem289';

const TablerowItem319 = ({ title }) => {
  return (
    <div className="table-row">
      <TablecelldivItem316 title={title || 'Knowledge Base 1'} />
      <TablecelldivItem309 label="97dcd1234567" />
      <TablecelldivItem309 label="May 6, 2025" />
      <TablecelldivItem289 />
    </div>
  );
};

export default TablerowItem319;
