import React from 'react';
import ContactdetailsitemtopItem117 from './ContactdetailsitemtopItem117';
import ContactdetailsitemdurationItem from './ContactdetailsitemdurationItem';

const ContactdetailsitemItem = ({}) => {
  return (
    <div className={'contactdetails-item'}>
      <ContactdetailsitemtopItem117 />
      <div className={'contactdetails-item-text'}>
        Discussed new integration options for Acme Corp. Will follow up with
        technical specifications.
      </div>
      <ContactdetailsitemdurationItem />
    </div>
  );
};

export default ContactdetailsitemItem;
