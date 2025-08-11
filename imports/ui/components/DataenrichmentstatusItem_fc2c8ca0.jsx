import React from 'react';

const DataenrichmentstatusItem_fc2c8ca0 = ({ src, divText }) => {
  return (
    <div className={'dataenrichmentstatus'}>
      <div className={'icon-lock'}>
        <img
          src={src || 'images/smarties-contact-icon-lock.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div className={'file-info-data'}>{divText || 'Locked'}</div>
    </div>
  );
};

export default DataenrichmentstatusItem_fc2c8ca0;
