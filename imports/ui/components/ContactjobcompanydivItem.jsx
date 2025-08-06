import React from 'react';

const ContactjobcompanydivItem = ({ divText }) => {
  return (
    <div className={'contact-jobcompany-div'}>
      <div className={'contact-positiontext'}>
        {divText || 'VP of Marketing'}
      </div>
      <div className={'contact-company-text'}>TechCorp Inc.</div>
    </div>
  );
};

export default ContactjobcompanydivItem;
