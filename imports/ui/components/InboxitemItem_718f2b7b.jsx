import React from 'react';

const InboxitemItem_718f2b7b = ({ divText, onClick = () => { }, isCurrent = false }) => {
  return (
    <a onClick={onClick} href={'#'} className={'inbox-item w-inline-block'} style={{ backgroundColor: isCurrent && "#e1d5d1" }}>
      <div>{divText || 'Configuration 01'}</div>
    </a>
  );
};

export default InboxitemItem_718f2b7b;
