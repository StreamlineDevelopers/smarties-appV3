import React from 'react';
import TablecelldivItem245 from './TablecelldivItem245';

const TableheaderItem = ({ divText, divText1 }) => {
  return (
    <div className={'table-header'}>
      <TablecelldivItem245 divText={'Name'} />
      <TablecelldivItem245 divText={'ID'} />
      <TablecelldivItem245 divText={'Date Created'} />
      <div className={'table-cell-div _w-5'}></div>
    </div>
  );
};

export default TableheaderItem;
