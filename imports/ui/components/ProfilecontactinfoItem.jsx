import React from 'react';

const ProfilecontactinfoItem = ({ divText }) => {
  return (
    <div className={'profile-contact-info'}>
      <div>{divText || 'Marketing Director'}</div>
    </div>
  );
};

export default ProfilecontactinfoItem;
