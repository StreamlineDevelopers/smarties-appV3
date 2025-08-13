import React from 'react';

const SocialcontentradiocardtitlerowItem = ({}) => {
  return (
    <div className={'social-content-radiocard-title-row'}>
      <img
        src={'../images/img_3img.png'}
        loading={'lazy'}
        width={'30'}
        height={'30'}
        alt={''}
        className={'social-content-avatar'}
      />
      <div className={'socialcontent-name'}>{'John Smith'}</div>
      <div className={'social-content-handle'}>{'@johnsmith'}</div>
    </div>
  );
};

export default SocialcontentradiocardtitlerowItem;
