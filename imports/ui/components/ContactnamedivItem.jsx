import React from 'react';
import ContactnameavatarItem from './ContactnameavatarItem';
import ReusableItem_2589998c from './ReusableItem_2589998c';

const ContactnamedivItem = ({ src, divText }) => {
  return (
    <div className={'contact-namediv'}>
      <ContactnameavatarItem
        src={'../images/smarties-avatar-02_1smarties-avatar-02.png'}
      />
      <ReusableItem_2589998c divText={'Sarah Johnson'} />
    </div>
  );
};

export default ContactnamedivItem;
