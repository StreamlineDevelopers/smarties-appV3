import React from 'react';
import IconprofilecontactdivItem from './IconprofilecontactdivItem';
import JourneycontactlabelItem from './JourneycontactlabelItem';
import ProfilecontactinfoItem from './ProfilecontactinfoItem';

const RowprofilecontactdetailsItem_ce61e6fb = ({
  dataWId,
  src,
  divText,
  divText1,
}) => {
  return (
    <div className={'row-profile-contact-details'}>
      <IconprofilecontactdivItem
        dataWId={'420b0f02-28d9-8e15-64f3-0d8b5aa4b1b3'}
        src={'images/smarties-icon-journey-started.svg'}
        divText={'Email Address'}
      />
      <JourneycontactlabelItem divText={'Started'} />
      <ProfilecontactinfoItem divText={'2:15 PM (19 min ago)'} />
    </div>
  );
};

export default RowprofilecontactdetailsItem_ce61e6fb;
