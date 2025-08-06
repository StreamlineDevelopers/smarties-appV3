import React from 'react';
import ContacttooltipItem from './ContacttooltipItem';

const ContactdetailsicondivItem = ({ dataWId, src }) => {
  return (
    <div className="contactdetails-icon-div">
      <div
        data-w-id={dataWId || '170a6bed-e932-1987-cb24-7f7bc570b366'}
        className="contactdetails-icon"
      >
        <img
          src={src || 'images/smarties-contact-icon-email.svg'}
          loading="lazy"
          alt=""
        />
      </div>
      <ContacttooltipItem />
    </div>
  );
};

export default ContactdetailsicondivItem;
