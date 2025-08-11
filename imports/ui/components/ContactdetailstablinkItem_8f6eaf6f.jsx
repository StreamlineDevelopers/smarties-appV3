import React from 'react';

const ContactdetailstablinkItem_8f6eaf6f = ({ dataWTab, divText, isActive, onClick = () => { } }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 5'}
      className={`contactdetails-tablink w-inline-block w-tab-link ${isActive ? 'w--current' : ''}`}
      onClick={onClick}
    >
      <div>{divText || 'Sentiment'}</div>
    </a>
  );
};

export default ContactdetailstablinkItem_8f6eaf6f;
