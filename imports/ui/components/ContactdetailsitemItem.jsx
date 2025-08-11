import React from 'react';
import ContactdetailsitemtopItem_98a332ef from './ContactdetailsitemtopItem_98a332ef';
import ContactdetailsitemdurationItem from './ContactdetailsitemdurationItem';

const ContactdetailsitemItem = ({}) => {
  return (
    <div className={'contactdetails-item'}>
      <ContactdetailsitemtopItem_98a332ef />
      <div className={'contactdetails-item-text'}>
        Discussed new integration options for Acme Corp. Will follow up with
        technical specifications.
      </div>
      <ContactdetailsitemdurationItem />
    </div>
  );
};

export default ContactdetailsitemItem;
