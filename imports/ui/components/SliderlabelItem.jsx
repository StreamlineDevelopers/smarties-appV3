import React from 'react';

const SliderlabelItem = ({ divText, divText1 }) => {
  return (
    <div className={'slider-label'}>
      <div>{divText || 'Slowest'}</div>
      <div>{divText1 || 'Fastest'}</div>
    </div>
  );
};

export default SliderlabelItem;
