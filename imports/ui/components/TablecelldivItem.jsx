import React from 'react';

const TablecelldivItem = ({ divText }) => {
  return (
    <div className={'table-cell-div'}>
      <div className={'table-date-text'}>{divText || 'Field'}</div>
    </div>
  );
};

export default TablecelldivItem;
