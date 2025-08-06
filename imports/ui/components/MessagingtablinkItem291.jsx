import React from 'react';

const MessagingtablinkItem291 = ({ dataWTab, divText }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className={'messaging-tablink w-inline-block w-tab-link'}
    >
      <div>{divText || 'Active'}</div>
      <div className={'messaging-tablink-notify-count'}>3</div>
    </a>
  );
};

export default MessagingtablinkItem291;
