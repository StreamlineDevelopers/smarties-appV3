import React from 'react';
import TablecelldivItem_369a7749 from './TablecelldivItem_369a7749';

const TableheaderItem = ({ divText, divText1 }) => {
  return (
    <div className={'table-header'}>
      <TablecelldivItem_369a7749 divText={'Name'} />
      <TablecelldivItem_369a7749 divText={'ID'} />
      <TablecelldivItem_369a7749 divText={'Date Created'} />
      <div className={'table-cell-div _w-5'}></div>
    </div>
  );
};

export default TableheaderItem;
