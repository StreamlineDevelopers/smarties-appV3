import React from 'react';
import ContactnameavatarItem from './ContactnameavatarItem';
import ReusableItem69 from './ReusableItem69';

const ContactnamedivItem = ({ src, divText }) => {
  return (
    <div className={'contact-namediv'}>
      <ContactnameavatarItem
        src={'../images/smarties-avatar-02_1smarties-avatar-02.png'}
      />
      <ReusableItem69 divText={'Sarah Johnson'} />
    </div>
  );
};

export default ContactnamedivItem;
