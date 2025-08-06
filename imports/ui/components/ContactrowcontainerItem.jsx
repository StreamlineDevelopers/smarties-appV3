import React from 'react';
import ContactdetailsrowItem from './ContactdetailsrowItem';
import ContactdetailsrowItem123 from './ContactdetailsrowItem123';
import ContactdetailsrowItem130 from './ContactdetailsrowItem130';
import ContactdetailsrowItem138 from './ContactdetailsrowItem138';

const ContactrowcontainerItem = ({
  dataWId,
  dataWId1,
  dataWId2,
  dataWId3,
  dataWId4,
}) => {
  return (
    <div className={'contact-row-container'}>
      <ContactdetailsrowItem
        dataWId={'170a6bed-e932-1987-cb24-7f7bc570b366'}
        src={'images/smarties-contact-icon-email.svg'}
        divText={'alex.morgan@orbital.com'}
      />
      <ContactdetailsrowItem123
        dataWId={'170a6bed-e932-1987-cb24-7f7bc570b370'}
        src={'images/smarties-contact-icon-phone.svg'}
      />
      <ContactdetailsrowItem123
        dataWId={'170a6bed-e932-1987-cb24-7f7bc570b37a'}
        src={'images/smarties-contact-icon-company.svg'}
      />
      <ContactdetailsrowItem130
        dataWId={'170a6bed-e932-1987-cb24-7f7bc570b384'}
      />
      <ContactdetailsrowItem138
        dataWId={'170a6bed-e932-1987-cb24-7f7bc570b390'}
      />
    </div>
  );
};

export default ContactrowcontainerItem;
