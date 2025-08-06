import React from 'react';
import SocialcontentbtnItem393 from './SocialcontentbtnItem393';

const SocialcontentactionbtncontainerItem = ({ src, divText }) => {
  return (
    <div className="socialcontent-action-btn-container">
      <SocialcontentbtnItem393
        src="../images/iconamoonedit-light_1.svg"
        divText="Edit"
      />
      <SocialcontentbtnItem393
        src={src || '../images/lucidecalendar_1.svg'}
        divText={divText || 'Reschedule'}
      />
    </div>
  );
};

export default SocialcontentactionbtncontainerItem;
