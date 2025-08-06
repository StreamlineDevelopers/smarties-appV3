import React from 'react';

const StepcardtitledivItem = ({ title }) => {
  return (
    <div className={'step-card-title-div'}>
      <div className={'step-title'}>{title || '4. Preview & Publish'}</div>
    </div>
  );
};

export default StepcardtitledivItem;
