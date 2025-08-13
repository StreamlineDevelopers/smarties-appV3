import React from 'react';

const CardsidecolumnhdItem = ({ dataWId, divText }) => {
  return (
    <div
      data-w-id={dataWId || '420b0f02-28d9-8e15-64f3-0d8b5aa4b10e'}
      className={'card-side-column-hd'}
    >
      <div>{divText || 'Contact Details'}</div>
      <div className={'side-column-arrow'}>
        <img
          loading={'lazy'}
          src={
            'https://cdn.prod.website-files.com/6863b2cd9d992eee2240d5c5/6863b2cd9d992eee2240d603_vuesax%2Foutline%2Farrow-down.svg'
          }
          alt={''}
        />
      </div>
    </div>
  );
};

export default CardsidecolumnhdItem;
