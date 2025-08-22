import React from 'react';
import ConvodividercontentItem from './ConvodividercontentItem';

const CallconvodividerItem = ({ src, divText }) => {
  return (
    <div className={'call-convo-divider'}>
      <div className={'convo-divider-line'}></div>
      <ConvodividercontentItem
        src={'images/smarties-avatar-icon-call.svg'}
        divText={'Call started • 10:35 AM'}
      />
      <div className={'convo-divider-line'}></div>
    </div>
  );
};

export default CallconvodividerItem;
