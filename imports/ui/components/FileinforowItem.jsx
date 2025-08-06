import React from 'react';

const FileinforowItem = ({ label, divText }) => {
  return (
    <div className={'file-info-row'}>
      <div className={'file-info-label'}>{label || 'Member Since'}</div>
      <div className={'file-info-data'}>{divText || 'March 2023'}</div>
    </div>
  );
};

export default FileinforowItem;
