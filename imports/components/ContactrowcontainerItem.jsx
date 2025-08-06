import React from 'react';
import ContactdetailsrowItem from './ContactdetailsrowItem';
import ContactdetailsrowItem146 from './ContactdetailsrowItem146';
import ContactdetailsrowItem153 from './ContactdetailsrowItem153';
import ContactdetailsrowItem161 from './ContactdetailsrowItem161';

const ContactrowcontainerItem = ({
  dataWId,
  dataWId1,
  dataWId2,
  dataWId3,
  dataWId4,
}) => {
  return (
    <div className="contact-row-container">
      <ContactdetailsrowItem
        dataWId={dataWId || '170a6bed-e932-1987-cb24-7f7bc570b366'}
        src="images/smarties-contact-icon-email.svg"
        divText="alex.morgan@orbital.com"
      />
      <ContactdetailsrowItem146
        dataWId={dataWId1 || '170a6bed-e932-1987-cb24-7f7bc570b370'}
        src="images/smarties-contact-icon-phone.svg"
      />
      <ContactdetailsrowItem146
        dataWId={dataWId2 || '170a6bed-e932-1987-cb24-7f7bc570b37a'}
        src="images/smarties-contact-icon-company.svg"
      />
      <ContactdetailsrowItem153
        dataWId={dataWId3 || '170a6bed-e932-1987-cb24-7f7bc570b384'}
      />
      <ContactdetailsrowItem161
        dataWId={dataWId4 || '170a6bed-e932-1987-cb24-7f7bc570b390'}
      />
    </div>
  );
};

export default ContactrowcontainerItem;
