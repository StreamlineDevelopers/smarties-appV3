import React from 'react';
import SlidercontainerItem from './SlidercontainerItem';

const RowsliderItem = ({ divText }) => {
  return (
    <div className="row-slider">
      <div className="text-slider-option">{divText || 'Normal'}</div>
      <SlidercontainerItem divText="Slowest" divText1="Fastest" />
    </div>
  );
};

export default RowsliderItem;
