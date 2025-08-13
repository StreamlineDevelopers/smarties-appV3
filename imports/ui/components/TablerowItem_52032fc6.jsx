import React from 'react';
import TablecelldivItem_6305e47e from './TablecelldivItem_6305e47e';
import TablecelldivItem_c06dc3de from './TablecelldivItem_c06dc3de';
import WcheckboxItem_88c3bf15 from './WcheckboxItem_88c3bf15';

const TablerowItem_52032fc6 = ({ name, id, dataName, htmlFor }) => {
  return (
    <div className={'table-row'}>
      <TablecelldivItem_6305e47e title={'sample.txt'} />
      <TablecelldivItem_c06dc3de label={'12 KB'} />
      <TablecelldivItem_c06dc3de label={'May 6, 2025'} />
      <div className={'table-cell-div _w-5'}>
        <WcheckboxItem_88c3bf15
          name={'check-add-file'}
          id={'check-add-file'}
          dataName={'check add file'}
          htmlFor={'check-add-file'}
        />
      </div>
    </div>
  );
};

export default TablerowItem_52032fc6;
