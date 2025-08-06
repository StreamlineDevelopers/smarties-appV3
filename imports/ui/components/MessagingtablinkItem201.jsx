import React from 'react';

const MessagingtablinkItem201 = ({ dataWTab, divText }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className={'messaging-tablink w-inline-block w-tab-link'}
    >
      <div>{divText || 'Gold'}</div>
    </a>
  );
};

export default MessagingtablinkItem201;
