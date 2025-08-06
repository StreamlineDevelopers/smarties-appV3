import React from 'react';
import ContacttablecelldivItem87 from './ContacttablecelldivItem87';
import ContacttablecelldivItem196 from './ContacttablecelldivItem196';
import ContacttablecelldivItem203 from './ContacttablecelldivItem203';
import ContacttablecelldivItem204 from './ContacttablecelldivItem204';
import ContacttablecelldivItem199 from './ContacttablecelldivItem199';

const ContacttablerowItem210 = ({
  src,
  divText,
  divText1,
  divText2,
  divText3,
}) => {
  return (
    <div className="contact--table-row">
      <ContacttablecelldivItem87
        src={src || '../images/smarties-avatar-02_1smarties-avatar-02.png'}
        divText={divText || 'Sarah Johnson'}
      />
      <ContacttablecelldivItem196 divText={divText1 || '94'} />
      <ContacttablecelldivItem203 divText={divText2 || 'Added to cart'} />
      <ContacttablecelldivItem204
        src="../images/smarties-leadtable-icon-03.svg"
        divText="Send 10% discount"
      />
      <ContacttablecelldivItem199 divText={divText3 || 'Send Offer'} />
    </div>
  );
};

export default ContacttablerowItem210;
