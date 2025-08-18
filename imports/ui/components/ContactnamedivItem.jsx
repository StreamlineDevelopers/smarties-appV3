import React from 'react';
import ContactnameavatarItem from './ContactnameavatarItem';
import ReusableItem_c2043d9a from './ReusableItem_c2043d9a';

const ContactnamedivItem = ({ src, divText }) => {
  return (
    <div className={'contact-namediv'}>
      <ContactnameavatarItem
        src={src}
      />
      <ReusableItem_c2043d9a divText={divText} />
    </div>
  );
};

export default ContactnamedivItem;
