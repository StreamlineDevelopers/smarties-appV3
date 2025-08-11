import React from 'react';

const MessagingtablinkItem_80e1bd02 = ({ dataWTab, divText, isActive, onClick = () => { } }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className={`messaging-tablink w-inline-block w-tab-link ${isActive ? 'w--current' : ''}`}
      onClick={onClick}
    >
      <div>{divText || 'Active'}</div>
      <div className={'messaging-tablink-notify-count'}>3</div>
    </a>
  );
};

export default MessagingtablinkItem_80e1bd02;
