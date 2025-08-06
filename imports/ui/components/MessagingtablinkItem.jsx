import React from 'react';

const MessagingtablinkItem = ({ dataWTab, divText }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className="messaging-tablink w-inline-block w-tab-link"
    >
      <div>{divText || 'New'}</div>
    </a>
  );
};

export default MessagingtablinkItem;
