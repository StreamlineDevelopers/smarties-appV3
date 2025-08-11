import React from 'react';
import IconembedItem_5b1b2f6b from './IconembedItem_5b1b2f6b';

const ObjectiondetectionitemItem = ({ divText }) => {
  return (
    <div className={'objectiondetection-item'}>
      <IconembedItem_5b1b2f6b />
      <div className={'messaging-inbox-duration'}>
        {divText || 'Detected in 12 conversations'}
      </div>
    </div>
  );
};

export default ObjectiondetectionitemItem;
