import React from 'react';
import SocialcontentbtnItem_bdddcdb9 from './SocialcontentbtnItem_bdddcdb9';

const SocialcontentactionbtncontainerItem = ({ src, divText }) => {
  return (
    <div className={'socialcontent-action-btn-container'}>
      <SocialcontentbtnItem_bdddcdb9
        src={'../images/iconamoonedit-light_1.svg'}
        divText={'Edit'}
      />
      <SocialcontentbtnItem_bdddcdb9
        src={'../images/lucidecalendar_1.svg'}
        divText={'Reschedule'}
      />
    </div>
  );
};

export default SocialcontentactionbtncontainerItem;
