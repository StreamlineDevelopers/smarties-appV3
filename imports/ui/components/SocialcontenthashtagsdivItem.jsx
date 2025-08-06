import React from 'react';

const SocialcontenthashtagsdivItem = ({ divText, divText1 }) => {
  return (
    <div className={'socialcontent-hashtags-div'}>
      <div className={'socialcontent-hashtags'}>#MarketingAutomation</div>
      <div className={'socialcontent-hashtags'}>
        {divText || '#DigitalMarketing'}
      </div>
      <div className={'socialcontent-hashtags'}>
        {divText1 || '#WorkSmarter'}
      </div>
    </div>
  );
};

export default SocialcontenthashtagsdivItem;
