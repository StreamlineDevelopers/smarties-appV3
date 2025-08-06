import React from 'react';

const FrequencyradiocardleftItem353 = ({ title, divText, divText1 }) => {
  return (
    <div className={'frequency-radiocard-left'}>
      <div className={'frquency-title'}>{title || 'Daily'}</div>
      <div className={'insights-subtext'}>
        {divText || 'Best for consistent engagement'}
      </div>
      <div className={'frquency-smaller-text'}>
        {divText1 || 'Post once every day'}
      </div>
    </div>
  );
};

export default FrequencyradiocardleftItem353;
