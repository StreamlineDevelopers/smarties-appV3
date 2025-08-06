import React from 'react';
import FrequencyradiocardleftItem from './FrequencyradiocardleftItem';
import FrequencyradiocardiconItem from './FrequencyradiocardiconItem';

const FrequencyradiocardItem = ({ title, iconSrc }) => {
  return (
    <div className={'frequency-radiocard'}>
      <FrequencyradiocardleftItem title={'Send Now'} />
      <FrequencyradiocardiconItem
        iconSrc={'/svgs/icon-462e6e1d6679c32391924fe86b535d52.svg'}
      />
    </div>
  );
};

export default FrequencyradiocardItem;
