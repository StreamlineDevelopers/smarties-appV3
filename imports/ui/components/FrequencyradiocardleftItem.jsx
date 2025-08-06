import React from 'react';

const FrequencyradiocardleftItem = ({ title }) => {
  return (
    <div className={'frequency-radiocard-left'}>
      <div className={'frquency-title small'}>{title || 'Send Now'}</div>
    </div>
  );
};

export default FrequencyradiocardleftItem;
