import React from 'react';

const CustomerinfotextcontentItem = ({ divText }) => {
  return (
    <div className={'customer-info-textcontent'}>
      <div>{divText || 'michael.chen@email.com'}</div>
    </div>
  );
};

export default CustomerinfotextcontentItem;
