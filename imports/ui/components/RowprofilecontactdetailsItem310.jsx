import React from 'react';
import IconprofilecontactdivItem from './IconprofilecontactdivItem';
import ProfilecontactinfoItem288 from './ProfilecontactinfoItem288';
import ContactdetailsinfodivItem from './ContactdetailsinfodivItem';

const RowprofilecontactdetailsItem310 = ({
  dataWId,
  src,
  divText,
  divText1,
  dataWId1,
}) => {
  return (
    <div className={'row-profile-contact-details'}>
      <IconprofilecontactdivItem
        dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b12b'}
        src={'images/smarties-contact-ip.svg'}
        divText={'IP Address'}
      />
      <ProfilecontactinfoItem288 divText={'192.168.1.254'} />
      <ContactdetailsinfodivItem
        dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b133'}
      />
    </div>
  );
};

export default RowprofilecontactdetailsItem310;
