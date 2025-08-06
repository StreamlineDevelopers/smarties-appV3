import React from 'react';
import IconembedItem from './IconembedItem';

const ChannelselectorItem = ({ iconSrc }) => {
  return (
    <div className={'channelselector'}>
      <IconembedItem
        iconSrc={'/svgs/icon-6ab1f2e32174e1b4097c9d765cc80c69.svg'}
      />
    </div>
  );
};

export default ChannelselectorItem;
