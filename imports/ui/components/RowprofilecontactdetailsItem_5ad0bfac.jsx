import React from 'react';
import IconprofilecontactdivItem_662047d9 from './IconprofilecontactdivItem_662047d9';
import ProfilecontactinfoItem_54d12a48 from './ProfilecontactinfoItem_54d12a48';
import ContactdetailsinfodivItem_65aa2a4e from './ContactdetailsinfodivItem_65aa2a4e';

const RowprofilecontactdetailsItem_5ad0bfac = ({
  dataWId,
  src,
  divText,
  divText1,
  dataWId1,
}) => {
  return (
    <div className={'row-profile-contact-details'}>
      <IconprofilecontactdivItem_662047d9
        dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b12b'}
        src={'images/smarties-contact-ip.svg'}
        divText={'IP Address'}
      />
      <ProfilecontactinfoItem_54d12a48 divText={'192.168.1.254'} />
      <ContactdetailsinfodivItem_65aa2a4e
        dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b133'}
      />
    </div>
  );
};

export default RowprofilecontactdetailsItem_5ad0bfac;
