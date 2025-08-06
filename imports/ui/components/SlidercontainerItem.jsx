import React from 'react';
import FormsliderItem from './FormsliderItem';
import SliderlabelItem from './SliderlabelItem';

const SlidercontainerItem = ({ divText, divText1 }) => {
  return (
    <div className="slider-container">
      <FormsliderItem />
      <SliderlabelItem
        divText={divText || 'Slowest'}
        divText1={divText1 || 'Fastest'}
      />
    </div>
  );
};

export default SlidercontainerItem;
