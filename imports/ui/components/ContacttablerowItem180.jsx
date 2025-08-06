import React from 'react';
import ContacttablecelldivItem75 from './ContacttablecelldivItem75';
import ContacttablecelldivItem170 from './ContacttablecelldivItem170';
import ContacttablecelldivItem176 from './ContacttablecelldivItem176';
import ContacttablecelldivItem177 from './ContacttablecelldivItem177';
import ContacttablecelldivItem173 from './ContacttablecelldivItem173';

const ContacttablerowItem180 = ({
  src,
  divText,
  divText1,
  divText2,
  divText3,
}) => {
  return (
    <div className={'contact--table-row'}>
      <ContacttablecelldivItem75
        src={'../images/smarties-avatar-02_1smarties-avatar-02.png'}
        divText={'Sarah Johnson'}
      />
      <ContacttablecelldivItem170 divText={'94'} />
      <ContacttablecelldivItem176 divText={'Added to cart'} />
      <ContacttablecelldivItem177
        src={'../images/smarties-leadtable-icon-03.svg'}
        divText={'Send 10% discount'}
      />
      <ContacttablecelldivItem173 divText={'Send Offer'} />
    </div>
  );
};

export default ContacttablerowItem180;
