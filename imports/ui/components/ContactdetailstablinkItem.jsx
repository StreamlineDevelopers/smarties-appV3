import React from 'react';

const ContactdetailstablinkItem = ({ dataWTab, divText }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className={'contactdetails-tablink w-inline-block w-tab-link'}
    >
      <div>{divText || 'Blog'}</div>
    </a>
  );
};

export default ContactdetailstablinkItem;
