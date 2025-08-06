import React from 'react';
import ConfidencepercentageItem from './ConfidencepercentageItem';

const ConfidencerowItem = ({}) => {
  return (
    <div className={'confidence-row'}>
      <ConfidencepercentageItem />
      <div className={'confidence-percent-text'}>75%</div>
    </div>
  );
};

export default ConfidencerowItem;
