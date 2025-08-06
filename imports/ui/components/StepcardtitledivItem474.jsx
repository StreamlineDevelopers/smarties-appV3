import React from 'react';

const StepcardtitledivItem474 = ({ title, description }) => {
  return (
    <div className="step-card-title-div">
      <div className="step-title">{title || '2. Select a Headline'}</div>
      <div className="step-description-small">
        {description ||
          'Based on your selected topic, our AI has generated these headline options for your business.'}
      </div>
    </div>
  );
};

export default StepcardtitledivItem474;
