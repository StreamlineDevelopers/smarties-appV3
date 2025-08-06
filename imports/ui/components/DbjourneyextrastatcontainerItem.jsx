import React from 'react';

const DbjourneyextrastatcontainerItem = ({ src, divText }) => {
  return (
    <div className={'db-journey-extra-stat-container'}>
      <div className={'db-journey-extra-details-icon'}>
        <img
          src={src || '../images/smarties-assistant-icon-01.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div>{divText || '3.2k views in 48 hours'}</div>
    </div>
  );
};

export default DbjourneyextrastatcontainerItem;
