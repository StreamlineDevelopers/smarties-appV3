import React from 'react';

const JourneycontactlabelItem = ({ divText }) => {
  return (
    <div className={'journey-contact-label'}>
      <div>{divText || 'Started'}</div>
    </div>
  );
};

export default JourneycontactlabelItem;
