import React from 'react';
import SocialcontentradiocardtitlerowItem from './SocialcontentradiocardtitlerowItem';
import SocialcontenthashtagsdivItem from './SocialcontenthashtagsdivItem';

const SocialcontentradiocardtopItem = ({ divText, divText1, divText2 }) => {
  return (
    <div className="social-content-radiocard-top">
      <SocialcontentradiocardtitlerowItem />
      <div className="socialcontent-post">
        {divText ||
          'Discover how AI is transforming customer service with real-time personalization. Our latest case study shows a 45% increase in satisfaction scores!'}
      </div>
      <SocialcontenthashtagsdivItem
        divText={divText1 || '#DigitalMarketing'}
        divText1={divText2 || '#WorkSmarter'}
      />
    </div>
  );
};

export default SocialcontentradiocardtopItem;
