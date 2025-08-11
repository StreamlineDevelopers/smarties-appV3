import React from 'react';
import ContactnameavatarItem_d28a3695 from './ContactnameavatarItem_d28a3695';

const ContactnamedivItem_82ef97b7 = ({ src, divText }) => {
  return (
    <div className={'contact-namediv'}>
      <ContactnameavatarItem_d28a3695
        src={'images/smarties-avatar-02_1smarties-avatar-02.png'}
      />
      <div className={'dataenrichment-field'}>{divText || 'Sarah Johnson'}</div>
    </div>
  );
};

export default ContactnamedivItem_82ef97b7;
