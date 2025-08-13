import React from 'react';

const HeadlinedurationItem = ({}) => {
  return (
    <div className={'headline-duration'}>
      <img
        src={'../images/smarties-icon-time.svg'}
        loading={'lazy'}
        width={'20'}
        height={'20'}
        alt={''}
        className={'bb-icon-edit'}
      />
      <div>{'~18 min'}</div>
    </div>
  );
};

export default HeadlinedurationItem;
