import React from 'react';

const MessagingtablinkItem = ({ dataWTab, divText, isActive = false, onClick = () => { } }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className={`messaging-tablink w-inline-block w-tab-link ${isActive ? 'w--current' : ''}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div>{divText || 'New'}</div>
    </a >
  );
};

export default MessagingtablinkItem;
