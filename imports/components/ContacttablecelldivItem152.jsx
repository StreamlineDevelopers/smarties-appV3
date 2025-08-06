import React from 'react';
import ContacttablecontactcolItem from './ContacttablecontactcolItem';

const ContacttablecelldivItem152 = ({ divText, divText1 }) => {
  return (
    <div className="contact-table-cell-div _w-10 contact">
      <ContacttablecontactcolItem
        divText={divText || 'sarah.j@techcorp.com'}
        divText1={divText1 || '+1 (555) 123-4567'}
      />
    </div>
  );
};

export default ContacttablecelldivItem152;
