import React from 'react';
import IconprofilecontactdivItem_662047d9 from './IconprofilecontactdivItem_662047d9';
import JourneycontactlabelItem from './JourneycontactlabelItem';
import ProfilecontactinfoItem from './ProfilecontactinfoItem';

const RowprofilecontactdetailsItem_ca66d080 = ({
  dataWId,
  src,
  divText,
  divText1,
}) => {
  return (
    <div className={'row-profile-contact-details'}>
      <IconprofilecontactdivItem_662047d9
        dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b1b3'}
        src={'images/smarties-icon-journey-started.svg'}
        divText={'Email Address'}
      />
      <JourneycontactlabelItem divText={'Started'} />
      <ProfilecontactinfoItem divText={'2:15 PM (19 min ago)'} />
    </div>
  );
};

export default RowprofilecontactdetailsItem_ca66d080;
