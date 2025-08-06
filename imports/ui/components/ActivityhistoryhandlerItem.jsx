import React from 'react';

const ActivityhistoryhandlerItem = ({ src, width }) => {
  return (
    <div className={'activityhistory-handler'}>
      <img
        src={src || 'images/img_2img.png'}
        loading={'lazy'}
        width={width || '14.661971092224121'}
        height={'14.661971092224121'}
        alt={''}
        className={'img-style'}
      />
      <div className={'activityhistory-duration'}>Handled by Bot</div>
    </div>
  );
};

export default ActivityhistoryhandlerItem;
