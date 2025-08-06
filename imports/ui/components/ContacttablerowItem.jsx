import React from 'react';
import ContacttablecelldivItem87 from './ContacttablecelldivItem87';
import ContacttablecelldivItem80 from './ContacttablecelldivItem80';
import ContacttablecelldivItem71 from './ContacttablecelldivItem71';
import ContacttablecelldivItem72 from './ContacttablecelldivItem72';
import ContacttablecelldivItem73 from './ContacttablecelldivItem73';
import ContacttablecelldivItem86 from './ContacttablecelldivItem86';

const ContacttablerowItem = ({ src, divText, label, label1 }) => {
  return (
    <div className="contact--table-row">
      <ContacttablecelldivItem87
        src={src || '../images/smarties-avatar-02_1smarties-avatar-02.png'}
        divText={divText || 'Sarah Johnson'}
      />
      <ContacttablecelldivItem80 />
      <ContacttablecelldivItem71 label={label || '1,245'} />
      <ContacttablecelldivItem72 label={label1 || '12'} />
      <ContacttablecelldivItem73 label="VIP Event Invitation (2 days)" />
      <ContacttablecelldivItem86 />
    </div>
  );
};

export default ContacttablerowItem;
