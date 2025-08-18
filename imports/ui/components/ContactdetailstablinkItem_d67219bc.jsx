import React from 'react';

const ContactdetailstablinkItem_d67219bc = ({ dataWTab, divText, isActive = false, onClick = () => { } }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className={`contactdetails-tablink w-inline-block w-tab-link ${isActive ? 'w--current' : ''}`}
      onClick={onClick}
    >
      <div>{divText || 'Technology'}</div>
    </a>
  );
};

export default ContactdetailstablinkItem_d67219bc;
