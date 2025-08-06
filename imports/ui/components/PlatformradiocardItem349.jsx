import React from 'react';

const PlatformradiocardItem349 = ({ src, label }) => {
  return (
    <div className={'platform-radiocard'}>
      <div className={'platform-icon'}>
        <img
          src={src || '../images/smarties-social-twitter.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div className={'blogtopic-radiolabel'}>{label || 'Twitter/X'}</div>
    </div>
  );
};

export default PlatformradiocardItem349;
