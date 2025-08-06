import React from 'react';
import IconprofilecontactdivItem from './IconprofilecontactdivItem';
import ProfilecontactinfoItem from './ProfilecontactinfoItem';

const RowprofilecontactdetailsItem = ({ dataWId, src, divText, divText1 }) => {
  return (
    <div className="row-profile-contact-details">
      <IconprofilecontactdivItem
        dataWId={dataWId || '7e3b2409-eb94-64ea-0156-81f68ed54f29'}
        src={src || 'images/smarties-icon-position.svg'}
        divText={divText || 'Position'}
      />
      <ProfilecontactinfoItem divText={divText1 || 'Marketing Director'} />
    </div>
  );
};

export default RowprofilecontactdetailsItem;
