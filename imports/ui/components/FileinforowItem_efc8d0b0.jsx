import React from 'react';

const FileinforowItem_efc8d0b0 = ({ label, divText }) => {
  return (
    <div className={'file-info-row'}>
      <div className={'file-info-label'}>{label || 'File ID'}</div>
      <div className={'file-info-data'}>{divText || 'FL-123456677'}</div>
    </div>
  );
};

export default FileinforowItem_efc8d0b0;
