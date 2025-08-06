import React from 'react';
import ContacttablecontactrowitemItem from './ContacttablecontactrowitemItem';

const ContacttablecontactcolItem = ({ divText, divText1 }) => {
  return (
    <div className={'contact-table-contact-col'}>
      <ContacttablecontactrowitemItem
        src={'images/smarties-tableicon-email.svg'}
        divText={'sarah.j@techcorp.com'}
      />
      <ContacttablecontactrowitemItem
        src={'images/smarties-tableicon-phone.svg'}
        divText={'+1 (555) 123-4567'}
      />
    </div>
  );
};

export default ContacttablecontactcolItem;
