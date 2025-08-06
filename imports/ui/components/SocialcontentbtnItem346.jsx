import React from 'react';

const SocialcontentbtnItem346 = ({ src, divText }) => {
  return (
    <a href={'#'} target={'_blank'} className={'social-content-btn'}>
      <img
        src={src || '../images/iconamoonedit-light_1.svg'}
        loading={'lazy'}
        width={'14'}
        height={'14'}
        alt={''}
        className={'socialcontent-fav-icon'}
      />
      <div>{divText || 'Edit'}</div>
    </a>
  );
};

export default SocialcontentbtnItem346;
