import React from 'react';

const ContactdetailstextcontentItem = ({ divText }) => {
  return (
    <div className="contactdetails-textcontent">
      <div className="file-info-data">
        {divText || 'alex.morgan@orbital.com'}
      </div>
    </div>
  );
};

export default ContactdetailstextcontentItem;
