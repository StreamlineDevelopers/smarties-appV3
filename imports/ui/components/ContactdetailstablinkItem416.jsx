import React from 'react';

const ContactdetailstablinkItem416 = ({ dataWTab, divText }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className={'contactdetails-tablink w-inline-block w-tab-link'}
    >
      <div>{divText || 'Technology'}</div>
    </a>
  );
};

export default ContactdetailstablinkItem416;
