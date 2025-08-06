import React from 'react';

const BgmusicitemleftItem = ({ divText }) => {
  return (
    <div className={'bg-music-item-left'}>
      <div className={'bg-music-icon'}>
        <img
          src={'../images/Frame_13.svg'}
          loading={'lazy'}
          width={'16'}
          height={'16'}
          alt={''}
          className={'bg-music-icon-image'}
        />
      </div>
      <div className={'bg-music-icon-text'}>
        {divText || 'Upbeat Corporate'}
      </div>
    </div>
  );
};

export default BgmusicitemleftItem;
