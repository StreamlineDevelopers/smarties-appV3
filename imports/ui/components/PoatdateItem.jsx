import React from 'react';

const PoatdateItem = ({}) => {
  return (
    <div className={'poat-date'}>
      <img
        src={'../images/lucidecalendar.svg'}
        loading={'lazy'}
        width={'14'}
        height={'14'}
        alt={''}
        className={'icon-edit'}
      />
      <div className={'post-date'}>2025-07-15 at 09:00 AM</div>
    </div>
  );
};

export default PoatdateItem;
