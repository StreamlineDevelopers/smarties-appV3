import React from 'react';
import ContactdetailsicondivItem from './ContactdetailsicondivItem';
import ContactdetailstextcontentItem from './ContactdetailstextcontentItem';

const ContactdetailsrowItem = ({ dataWId, src, divText }) => {
  return (
    <div className="contactdetails-row">
      <ContactdetailsicondivItem
        dataWId={dataWId || '170a6bed-e932-1987-cb24-7f7bc570b366'}
        src={src || 'images/smarties-contact-icon-email.svg'}
      />
      <ContactdetailstextcontentItem
        divText={divText || 'alex.morgan@orbital.com'}
      />
    </div>
  );
};

export default ContactdetailsrowItem;
