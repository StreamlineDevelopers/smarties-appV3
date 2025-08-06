import React from 'react';
import ContactnameavatarItem106 from './ContactnameavatarItem106';

const ContactnamedivItem129 = ({ src, divText }) => {
  return (
    <div className="contact-namediv">
      <ContactnameavatarItem106
        src={src || 'images/smarties-avatar-02_1smarties-avatar-02.png'}
      />
      <div className="dataenrichment-field">{divText || 'Sarah Johnson'}</div>
    </div>
  );
};

export default ContactnamedivItem129;
