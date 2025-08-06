import React from 'react';
import ContacttablecelldivItem75 from './ContacttablecelldivItem75';
import ContacttablecelldivItem70 from './ContacttablecelldivItem70';
import ContacttablecelldivItem61 from './ContacttablecelldivItem61';
import ContacttablecelldivItem62 from './ContacttablecelldivItem62';
import ContacttablecelldivItem63 from './ContacttablecelldivItem63';
import ContacttablecelldivItem74 from './ContacttablecelldivItem74';

const ContacttablerowItem = ({ src, divText, label, label1 }) => {
  return (
    <div className={'contact--table-row'}>
      <ContacttablecelldivItem75
        src={'../images/smarties-avatar-02_1smarties-avatar-02.png'}
        divText={'Sarah Johnson'}
      />
      <ContacttablecelldivItem70 />
      <ContacttablecelldivItem61 label={'1,245'} />
      <ContacttablecelldivItem62 label={'12'} />
      <ContacttablecelldivItem63 label={'VIP Event Invitation (2 days)'} />
      <ContacttablecelldivItem74 />
    </div>
  );
};

export default ContacttablerowItem;
