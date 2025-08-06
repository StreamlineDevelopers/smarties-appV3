import React from 'react';
import TablecelldivItem273 from './TablecelldivItem273';
import TablecelldivItem266 from './TablecelldivItem266';
import WcheckboxItem268 from './WcheckboxItem268';

const TablerowItem277 = ({ name, id, dataName, htmlFor }) => {
  return (
    <div className={'table-row'}>
      <TablecelldivItem273 title={'sample.txt'} />
      <TablecelldivItem266 label={'12 KB'} />
      <TablecelldivItem266 label={'May 6, 2025'} />
      <div className={'table-cell-div _w-5'}>
        <WcheckboxItem268
          name={'check-add-file'}
          id={'check-add-file'}
          dataName={'check add file'}
          htmlFor={'check-add-file'}
        />
      </div>
    </div>
  );
};

export default TablerowItem277;
