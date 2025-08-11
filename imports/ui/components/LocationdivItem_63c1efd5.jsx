import React from 'react';

const LocationdivItem_63c1efd5 = ({ src, divText }) => {
  return (
    <div className={'location-div'}>
      <div className={'icon-action'}>
        <img
          src={src || '../images/smarties-leadtable-icon-03.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div>{divText || 'Send 10% discount'}</div>
    </div>
  );
};

export default LocationdivItem_63c1efd5;
