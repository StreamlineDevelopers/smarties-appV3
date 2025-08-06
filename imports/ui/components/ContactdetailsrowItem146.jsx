import React from 'react';
import ContactdetailsicondivItem from './ContactdetailsicondivItem';
import ContactdetailstextcontentItem111 from './ContactdetailstextcontentItem111';

const ContactdetailsrowItem146 = ({ dataWId, src }) => {
  return (
    <div className="contactdetails-row">
      <ContactdetailsicondivItem
        dataWId={dataWId || '170a6bed-e932-1987-cb24-7f7bc570b370'}
        src={src || 'images/smarties-contact-icon-phone.svg'}
      />
      <ContactdetailstextcontentItem111 />
    </div>
  );
};

export default ContactdetailsrowItem146;
