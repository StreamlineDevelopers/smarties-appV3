import React from 'react';

const RowdatacollectionmainItem = ({ label, divText }) => {
  return (
    <div className={'row-data-collection-main'}>
      <div className={'data-label'}>{label || 'Referral Source'}</div>
      <div className={'data-info'}>{divText || 'Google Search'}</div>
    </div>
  );
};

export default RowdatacollectionmainItem;
