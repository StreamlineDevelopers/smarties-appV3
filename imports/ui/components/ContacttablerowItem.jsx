import React from 'react';
import ContacttablecelldivItem_00c9231e from './ContacttablecelldivItem_00c9231e';
import ContacttablecelldivItem_bbde43b8 from './ContacttablecelldivItem_bbde43b8';
import ContacttablecelldivItem_89bc2880 from './ContacttablecelldivItem_89bc2880';
import ContacttablecelldivItem_5dc40295 from './ContacttablecelldivItem_5dc40295';
import ContacttablecelldivItem_9aa00f4d from './ContacttablecelldivItem_9aa00f4d';
import ContacttablecelldivItem_06b1398f from './ContacttablecelldivItem_06b1398f';

const ContacttablerowItem = ({ src, divText, label, label1 }) => {
  return (
    <div className={'contact--table-row'}>
      <ContacttablecelldivItem_00c9231e
        src={'../images/smarties-avatar-02_1smarties-avatar-02.png'}
        divText={'Sarah Johnson'}
      />
      <ContacttablecelldivItem_bbde43b8 />
      <ContacttablecelldivItem_89bc2880 label={'1,245'} />
      <ContacttablecelldivItem_5dc40295 label={'12'} />
      <ContacttablecelldivItem_9aa00f4d
        label={'VIP Event Invitation (2 days)'}
      />
      <ContacttablecelldivItem_06b1398f />
    </div>
  );
};

export default ContacttablerowItem;
