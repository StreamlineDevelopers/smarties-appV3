import React from 'react';
import ContactnameavatarItem from './ContactnameavatarItem';
import ReusableItem79 from './ReusableItem79';

const ContactnamedivItem = ({ src, divText }) => {
  return (
    <div className="contact-namediv">
      <ContactnameavatarItem
        src={src || '../images/smarties-avatar-02_1smarties-avatar-02.png'}
      />
      <ReusableItem79 divText={divText || 'Sarah Johnson'} />
    </div>
  );
};

export default ContactnamedivItem;
