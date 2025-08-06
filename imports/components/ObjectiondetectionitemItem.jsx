import React from 'react';
import IconembedItem370 from './IconembedItem370';

const ObjectiondetectionitemItem = ({ divText }) => {
  return (
    <div className="objectiondetection-item">
      <IconembedItem370 />
      <div className="messaging-inbox-duration">
        {divText || 'Detected in 12 conversations'}
      </div>
    </div>
  );
};

export default ObjectiondetectionitemItem;
