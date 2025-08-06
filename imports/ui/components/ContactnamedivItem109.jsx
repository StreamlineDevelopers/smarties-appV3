import React from 'react';
import ContactnameavatarItem88 from './ContactnameavatarItem88';

const ContactnamedivItem109 = ({ src, divText }) => {
  return (
    <div className={'contact-namediv'}>
      <ContactnameavatarItem88
        src={'images/smarties-avatar-02_1smarties-avatar-02.png'}
      />
      <div className={'dataenrichment-field'}>{divText || 'Sarah Johnson'}</div>
    </div>
  );
};

export default ContactnamedivItem109;
