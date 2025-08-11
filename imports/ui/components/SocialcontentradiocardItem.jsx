import React from 'react';
import SocialcontentradiocardtopItem from './SocialcontentradiocardtopItem';
import SocialcontentradiocardbottomItem_ea75eecd from './SocialcontentradiocardbottomItem_ea75eecd';

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
      <SocialcontentradiocardbottomItem_ea75eecd />
      <div className={'social-content-tag'}>{divText3 || 'Professional'}</div>
    </div>
  );
};

export default SocialcontentradiocardItem;
