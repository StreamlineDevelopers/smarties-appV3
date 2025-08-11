import React from 'react';
import ContacttablecelldivItem_00c9231e from './ContacttablecelldivItem_00c9231e';
import ContacttablecelldivItem_2ec726a2 from './ContacttablecelldivItem_2ec726a2';
import ContacttablecelldivItem_687d55ff from './ContacttablecelldivItem_687d55ff';
import ContacttablecelldivItem_d8491e9b from './ContacttablecelldivItem_d8491e9b';
import ContacttablecelldivItem_adfff803 from './ContacttablecelldivItem_adfff803';

const ContacttablerowItem_2f674fe6 = ({
  src,
  divText,
  divText1,
  divText2,
  divText3,
}) => {
  return (
    <div className={'contact--table-row'}>
      <ContacttablecelldivItem_00c9231e
        src={'../images/smarties-avatar-02_1smarties-avatar-02.png'}
        divText={'Sarah Johnson'}
      />
      <ContacttablecelldivItem_2ec726a2 divText={'94'} />
      <ContacttablecelldivItem_687d55ff divText={'Added to cart'} />
      <ContacttablecelldivItem_d8491e9b
        src={'../images/smarties-leadtable-icon-03.svg'}
        divText={'Send 10% discount'}
      />
      <ContacttablecelldivItem_adfff803 divText={'Send Offer'} />
    </div>
  );
};

export default ContacttablerowItem_2f674fe6;
