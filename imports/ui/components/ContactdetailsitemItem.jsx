import React from 'react';
import ContactdetailsitemtopItem_739138c4 from './ContactdetailsitemtopItem_739138c4';
import ContactdetailsitemdurationItem from './ContactdetailsitemdurationItem';

const ContactdetailsitemItem = ({}) => {
  return (
    <div className={'contactdetails-item'}>
      <ContactdetailsitemtopItem_739138c4 />
      <div className={'contactdetails-item-text'}>
        {
          'Discussed new integration options for Acme Corp. Will follow up with technical specifications.'
        }
      </div>
      <ContactdetailsitemdurationItem />
    </div>
  );
};

export default ContactdetailsitemItem;
