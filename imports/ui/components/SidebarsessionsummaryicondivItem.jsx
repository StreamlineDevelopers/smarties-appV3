import React from 'react';

const SidebarsessionsummaryicondivItem = ({ src, width, height, divText }) => {
  return (
    <div className={'sidebar-sessionsummary-icondiv'}>
      <img
        src={src || 'images/icon-park-outlinepage.svg'}
        loading={'lazy'}
        width={width || '15'}
        height={height || '15'}
        alt={''}
        className={'sidebar-sessionsummary-icon'}
      />
      <div>{divText || '5'}</div>
    </div>
  );
};

export default SidebarsessionsummaryicondivItem;
