import React from 'react';

const NoticeactionlinkItem = ({}) => {
  return (
    <div className={'notice-actionlink'}>
      <div>{'Create'}</div>
      <div className={'notice-actionlink-icon'}>
        <img
          loading={'lazy'}
          src={'../images/smarties-notice-actionlink.svg'}
          alt={''}
        />
      </div>
    </div>
  );
};

export default NoticeactionlinkItem;
