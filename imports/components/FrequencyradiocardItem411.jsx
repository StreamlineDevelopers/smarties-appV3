import React from 'react';
import FrequencyradiocardleftItem401 from './FrequencyradiocardleftItem401';

const FrequencyradiocardItem411 = ({ title, divText, divText1, src }) => {
  return (
    <div className="frequency-radiocard">
      <FrequencyradiocardleftItem401
        title={title || 'Daily'}
        divText={divText || 'Best for consistent engagement'}
        divText1={divText1 || 'Post once every day'}
      />
      <div className="frequency-radiocard-icon">
        <img
          src={src || '../images/smarties-frequency-daily.svg'}
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};

export default FrequencyradiocardItem411;
