import React from 'react';
import FrequencyradiocardleftItem353 from './FrequencyradiocardleftItem353';

const FrequencyradiocardItem359 = ({ title, divText, divText1, src }) => {
  return (
    <div className={'frequency-radiocard'}>
      <FrequencyradiocardleftItem353
        title={'Daily'}
        divText={'Best for consistent engagement'}
        divText1={'Post once every day'}
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

export default FrequencyradiocardItem359;
