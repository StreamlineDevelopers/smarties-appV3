import React from 'react';
import FrequencyradiocardleftItem_3653bfb8 from './FrequencyradiocardleftItem_3653bfb8';

const FrequencyradiocardItem_2b9d4f8f = ({ title, divText, divText1, src }) => {
  return (
    <div className={'frequency-radiocard'}>
      <FrequencyradiocardleftItem_3653bfb8
        title={title}
        divText={divText}
        divText1={divText1}
      />
      <div className={'frequency-radiocard-icon'}>
        <img
          src={src || '../images/smarties-frequency-daily.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
    </div>
  );
};

export default FrequencyradiocardItem_2b9d4f8f;
