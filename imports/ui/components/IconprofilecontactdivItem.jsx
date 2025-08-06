import React from 'react';

const IconprofilecontactdivItem = ({ dataWId, src, divText }) => {
  return (
    <div className={'icon-profile-contact-div'}>
      <div
        data-w-id={dataWId || '7e3b2409-eb94-64ea-0156-81f68ed54f29'}
        className={'icon-profile-contact'}
      >
        <img
          loading={'lazy'}
          src={src || 'images/smarties-icon-position.svg'}
          alt={''}
        />
      </div>
      <div className={'tooltip'}>{divText || 'Position'}</div>
    </div>
  );
};

export default IconprofilecontactdivItem;
