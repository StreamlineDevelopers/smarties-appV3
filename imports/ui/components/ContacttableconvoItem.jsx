import React from 'react';

const ContacttableconvoItem = ({ divText }) => {
  return (
    <div className={'contact-table-convo'}>
      <div className={'contact-table-icon'}>
        <img
          src={'images/smarties-tableicon-convo.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div>{divText || '6'}</div>
    </div>
  );
};

export default ContacttableconvoItem;
