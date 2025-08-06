import React from 'react';
import SocialcontentradiocardtopItem from './SocialcontentradiocardtopItem';
import SocialcontentradiocardbottomItem361 from './SocialcontentradiocardbottomItem361';

const SocialcontentradiocardItem = ({
  divText,
  divText1,
  divText2,
  divText3,
}) => {
  return (
    <div className={'social-content-radiocard'}>
      <SocialcontentradiocardtopItem
        divText={
          'Discover how AI is transforming customer service with real-time personalization. Our latest case study shows a 45% increase in satisfaction scores!'
        }
        divText1={'#DigitalMarketing'}
        divText2={'#WorkSmarter'}
      />
      <SocialcontentradiocardbottomItem361 />
      <div className={'social-content-tag'}>{divText3 || 'Professional'}</div>
    </div>
  );
};

export default SocialcontentradiocardItem;
