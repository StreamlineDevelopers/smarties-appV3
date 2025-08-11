import React from 'react';
import IconembedItem_e35600f8 from './IconembedItem_e35600f8';

const ObjectiondetectionitemItem = ({ divText }) => {
  return (
    <div className={'objectiondetection-item'}>
      <IconembedItem_e35600f8 />
      <div className={'messaging-inbox-duration'}>
        {divText || 'Detected in 12 conversations'}
      </div>
    </div>
  );
};

export default ObjectiondetectionitemItem;
