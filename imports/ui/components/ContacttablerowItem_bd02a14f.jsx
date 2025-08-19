import React from 'react';
import ContacttablecelldivItem_00c9231e from './ContacttablecelldivItem_00c9231e';
import ContacttablecelldivItem_2ec726a2 from './ContacttablecelldivItem_2ec726a2';
import ContacttablecelldivItem_3fa68a40 from './ContacttablecelldivItem_3fa68a40';
import ContacttablecelldivItem_d8491e9b from './ContacttablecelldivItem_d8491e9b';
import ContacttablecelldivItem_adfff803 from './ContacttablecelldivItem_adfff803';

const ContacttablerowItem_bd02a14f = ({
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
        divText={divText || 'John Doe'}
      />
      <ContacttablecelldivItem_2ec726a2 divText={divText1} />
      <ContacttablecelldivItem_3fa68a40 divText={divText2} />
      <ContacttablecelldivItem_d8491e9b
        src={'../images/smarties-leadtable-icon-03.svg'}
        divText={'Send 10% discount'}
      />
      <ContacttablecelldivItem_adfff803 divText={divText3} />
    </div>
  );
};

export default ContacttablerowItem_bd02a14f;
