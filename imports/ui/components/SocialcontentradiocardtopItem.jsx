import React from 'react';
import SocialcontentradiocardtitlerowItem from './SocialcontentradiocardtitlerowItem';
import SocialcontenthashtagsdivItem from './SocialcontenthashtagsdivItem';

const SocialcontentradiocardtopItem = ({ divText, divText1, divText2 }) => {
  return (
    <div className={'social-content-radiocard-top'}>
      <SocialcontentradiocardtitlerowItem />
      <div className={'socialcontent-post'}>
        {divText}
      </div>
      <SocialcontenthashtagsdivItem
        divText={'#DigitalMarketing'}
        divText1={'#WorkSmarter'}
      />
    </div>
  );
};

export default SocialcontentradiocardtopItem;
