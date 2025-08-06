import React from 'react';

const ContactdetailstablinkItem113 = ({ dataWTab, divText }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 5'}
      className="contactdetails-tablink w-inline-block w-tab-link"
    >
      <div>{divText || 'Sentiment'}</div>
    </a>
  );
};

export default ContactdetailstablinkItem113;
