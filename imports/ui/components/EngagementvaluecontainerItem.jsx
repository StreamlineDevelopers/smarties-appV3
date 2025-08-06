import React from 'react';

const EngagementvaluecontainerItem = ({ src, divText }) => {
  return (
    <div className={'engagement-value-container'}>
      <img
        src={src || '../images/mdiflame.svg'}
        loading={'lazy'}
        width={'18'}
        height={'18'}
        alt={''}
        className={'mdiflame'}
      />
      <div className={'engagement-value'}>{divText || '91'}</div>
    </div>
  );
};

export default EngagementvaluecontainerItem;
