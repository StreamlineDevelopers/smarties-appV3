import React from 'react';
import ContactnameavatarItem from './ContactnameavatarItem';
import ReusableItem_c2043d9a from './ReusableItem_c2043d9a';

const ContactnamedivItem = ({ src, divText }) => {
  return (
    <div className={'contact-namediv'}>
      <ContactnameavatarItem
        src={'../images/smarties-avatar-02_1smarties-avatar-02.png'}
      />
      <ReusableItem_c2043d9a divText={'Sarah Johnson'} />
    </div>
  );
};

export default ContactnamedivItem;
