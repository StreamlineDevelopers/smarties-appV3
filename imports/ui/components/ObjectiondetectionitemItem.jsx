import React from 'react';
import IconembedItem325 from './IconembedItem325';

const ObjectiondetectionitemItem = ({ divText }) => {
  return (
    <div className={'objectiondetection-item'}>
      <IconembedItem325 />
      <div className={'messaging-inbox-duration'}>
        {divText || 'Detected in 12 conversations'}
      </div>
    </div>
  );
};

export default ObjectiondetectionitemItem;
