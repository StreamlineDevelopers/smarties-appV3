import React from 'react';
import TablecelldivItem_6305e47e from './TablecelldivItem_6305e47e';
import TablecelldivItem_c06dc3de from './TablecelldivItem_c06dc3de';
import WcheckboxItem_68544a22 from './WcheckboxItem_68544a22';

const TablerowItem_1df8defc = ({ name, id, dataName, htmlFor }) => {
  return (
    <div className={'table-row'}>
      <TablecelldivItem_6305e47e title={'sample.txt'} />
      <TablecelldivItem_c06dc3de label={'12 KB'} />
      <TablecelldivItem_c06dc3de label={'May 6, 2025'} />
      <div className={'table-cell-div _w-5'}>
        <WcheckboxItem_68544a22
          name={'check-add-file'}
          id={'check-add-file'}
          dataName={'check add file'}
          htmlFor={'check-add-file'}
        />
      </div>
    </div>
  );
};

export default TablerowItem_1df8defc;
