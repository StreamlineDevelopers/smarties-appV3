import React from 'react';
import ContactdetailsitemtopItem137 from './ContactdetailsitemtopItem137';
import ContactdetailsitemdurationItem from './ContactdetailsitemdurationItem';

const ContactdetailsitemItem = ({ props }) => {
  return (
    <div className="contactdetails-item">
      <ContactdetailsitemtopItem137 />
      <div className="contactdetails-item-text">
        Discussed new integration options for Acme Corp. Will follow up with
        technical specifications.
      </div>
      <ContactdetailsitemdurationItem />
    </div>
  );
};

export default ContactdetailsitemItem;
