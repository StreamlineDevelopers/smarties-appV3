import React from 'react';
import DataenrichmentstatusItem from './DataenrichmentstatusItem';

const TablecelldivItem54 = ({ src, divText }) => {
  return (
    <div className="table-cell-div _w-10">
      <DataenrichmentstatusItem
        src={src || '../images/smarties-contact-icon-lock.svg'}
        divText={divText || 'Locked'}
      />
    </div>
  );
};

export default TablecelldivItem54;
