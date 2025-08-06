import React from 'react';

const MessagingtablinkItem364 = ({ dataWTab, divText }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className="messaging-tablink w-inline-block w-tab-link"
    >
      <div>{divText || 'Critical'}</div>
    </a>
  );
};

export default MessagingtablinkItem364;
