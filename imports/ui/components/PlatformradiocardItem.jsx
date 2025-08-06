import React from 'react';
import ChannelselectorItem from './ChannelselectorItem';

const PlatformradiocardItem = ({ iconSrc, label }) => {
  return (
    <div className={'platform-radiocard'}>
      <ChannelselectorItem
        iconSrc={'/svgs/icon-6ab1f2e32174e1b4097c9d765cc80c69.svg'}
      />
      <div className={'blogtopic-radiolabel'}>{label || 'Email'}</div>
    </div>
  );
};

export default PlatformradiocardItem;
