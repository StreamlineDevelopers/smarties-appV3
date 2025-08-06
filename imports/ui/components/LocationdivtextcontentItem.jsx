import React from 'react';

const LocationdivtextcontentItem = ({ divText }) => {
  return (
    <div className={'location-div-textcontent'}>
      <div>{divText || 'San Francisco, CA'}</div>
      <div className={'text-block-3'}>USA</div>
    </div>
  );
};

export default LocationdivtextcontentItem;
