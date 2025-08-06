import React from 'react';

const SidebaracctdetailsrowItem = ({ label, divText }) => {
  return (
    <div className={'sidebar-acctdetails-row'}>
      <div className={'sidebar-acctdetails-label'}>
        {label || 'Last active:'}
      </div>
      <div className={'sidebar-acctdetails-data'}>
        {divText || '2 hours ago'}
      </div>
    </div>
  );
};

export default SidebaracctdetailsrowItem;
