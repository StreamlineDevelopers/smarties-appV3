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
          divText}
        divText1={divText1}
        divText2={divText2}
      />
      <SocialcontentradiocardbottomItem_ea75eecd />
      <div className={'social-content-tag'}>{divText3 || 'Professional'}</div>
    </div>
  );
};

export default SocialcontentradiocardItem;
