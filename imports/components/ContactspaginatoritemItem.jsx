import React from 'react';

const ContactspaginatoritemItem = ({ divText }) => {
  return (
    <div className="contacts-paginator-item">
      <div>{divText || '2'}</div>
    </div>
  );
};

export default ContactspaginatoritemItem;
