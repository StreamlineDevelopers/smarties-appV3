import React from 'react';
import FormhddivleftItem430 from './FormhddivleftItem430';
import FormhddivrightItem from './FormhddivrightItem';

const PopupformhddivItem447 = ({ divText, dataWId, label }) => {
  return (
    <div className="popup-form-hd-div">
      <FormhddivleftItem430 divText={divText || 'Parameters'} />
      <FormhddivrightItem
        dataWId={dataWId || '1849b75f-9350-98c1-3481-367f0109f99d'}
        label={label || 'Add Property'}
      />
    </div>
  );
};

export default PopupformhddivItem447;
