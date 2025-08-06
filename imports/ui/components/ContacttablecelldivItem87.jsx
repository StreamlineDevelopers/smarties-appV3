import React from 'react';
import ContactnamedivItem from './ContactnamedivItem';

const ContacttablecelldivItem87 = ({ src, divText }) => {
  return (
    <div className="contact-table-cell-div stretch">
      <ContactnamedivItem
        src={src || '../images/smarties-avatar-02_1smarties-avatar-02.png'}
        divText={divText || 'Sarah Johnson'}
      />
    </div>
  );
};

export default ContacttablecelldivItem87;
