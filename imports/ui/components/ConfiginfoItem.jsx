import React from 'react';

const ConfiginfoItem = ({ label, divText }) => {
  return (
    <div className={'config-info'}>
      <div className={'file-info-label'}>{label || 'Name'}</div>
      <div className={'file-info-data'}>{divText || 'Configuration 1'}</div>
    </div>
  );
};

export default ConfiginfoItem;
