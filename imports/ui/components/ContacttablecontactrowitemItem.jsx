import React from 'react';

const ContacttablecontactrowitemItem = ({ src, divText }) => {
  return (
    <div className={'contact-table-contact-row-item'}>
      <div className={'contact-table-contact-row-icon'}>
        <img
          src={src || 'images/smarties-tableicon-email.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div>{divText || 'sarah.j@techcorp.com'}</div>
    </div>
  );
};

export default ContacttablecontactrowitemItem;
