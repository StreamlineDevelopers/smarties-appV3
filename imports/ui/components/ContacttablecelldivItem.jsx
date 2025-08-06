import React from 'react';

const ContacttablecelldivItem = ({ header }) => {
  return (
    <div className={'contact-table-cell-div stretch'}>
      <div className={'contact-table-header-text'}>{header || 'NAME'}</div>
    </div>
  );
};

export default ContacttablecelldivItem;
