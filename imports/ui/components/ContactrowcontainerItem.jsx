import React from 'react';
import ContactdetailsrowItem from './ContactdetailsrowItem';
import ContactdetailsrowItem_1fc6171f from './ContactdetailsrowItem_1fc6171f';
import ContactdetailsrowItem_68aad6a4 from './ContactdetailsrowItem_68aad6a4';
import ContactdetailsrowItem_3b1987d9 from './ContactdetailsrowItem_3b1987d9';

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
      <ContactdetailsrowItem_1fc6171f
        dataWId={'170a6bed-e932-1987-cb24-7f7bc570b370'}
        src={'images/smarties-contact-icon-phone.svg'}
      />
      <ContactdetailsrowItem_1fc6171f
        dataWId={'170a6bed-e932-1987-cb24-7f7bc570b37a'}
        src={'images/smarties-contact-icon-company.svg'}
      />
      <ContactdetailsrowItem_68aad6a4
        dataWId={'170a6bed-e932-1987-cb24-7f7bc570b384'}
      />
      <ContactdetailsrowItem_3b1987d9
        dataWId={'170a6bed-e932-1987-cb24-7f7bc570b390'}
      />
    </div>
  );
};

export default ContactrowcontainerItem;
