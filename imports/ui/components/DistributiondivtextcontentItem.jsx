import React from 'react';

const DistributiondivtextcontentItem = ({ title, description }) => {
  return (
    <div className={'distribution-div-textcontent'}>
      <div className={'distribution-title'}>{title || 'Spotify'}</div>
      <div className={'distribution-description'}>
        {description || 'Reach 456M monthly listeners'}
      </div>
    </div>
  );
};

export default DistributiondivtextcontentItem;
