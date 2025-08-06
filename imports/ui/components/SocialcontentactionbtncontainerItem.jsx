import React from 'react';
import SocialcontentbtnItem346 from './SocialcontentbtnItem346';

const SocialcontentactionbtncontainerItem = ({ src, divText }) => {
  return (
    <div className={'socialcontent-action-btn-container'}>
      <SocialcontentbtnItem346
        src={'../images/iconamoonedit-light_1.svg'}
        divText={'Edit'}
      />
      <SocialcontentbtnItem346
        src={'../images/lucidecalendar_1.svg'}
        divText={'Reschedule'}
      />
    </div>
  );
};

export default SocialcontentactionbtncontainerItem;
