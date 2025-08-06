import React from 'react';
import IconprofilecontactdivItem from './IconprofilecontactdivItem';
import ProfilecontactinfoItem331 from './ProfilecontactinfoItem331';
import ContactdetailsinfodivItem from './ContactdetailsinfodivItem';

const RowprofilecontactdetailsItem354 = ({
  dataWId,
  src,
  divText,
  divText1,
  dataWId1,
}) => {
  return (
    <div className="row-profile-contact-details">
      <IconprofilecontactdivItem
        dataWId={dataWId || '420b0f02-28d9-8e15-64f3-0d8b5aa4b12b'}
        src={src || 'images/smarties-contact-ip.svg'}
        divText={divText || 'IP Address'}
      />
      <ProfilecontactinfoItem331 divText={divText1 || '192.168.1.254'} />
      <ContactdetailsinfodivItem
        dataWId={dataWId1 || '420b0f02-28d9-8e15-64f3-0d8b5aa4b133'}
      />
    </div>
  );
};

export default RowprofilecontactdetailsItem354;
