import React from 'react';
import FormhddivleftItem435 from './FormhddivleftItem435';
import FormhddivrightItem from './FormhddivrightItem';

const PopupformhddivItem449 = ({ label, dataWId, label1 }) => {
  return (
    <div className="popup-form-hd-div">
      <FormhddivleftItem435 label={label || 'Parameters'} />
      <FormhddivrightItem
        dataWId={dataWId || '5d5b0e1b-d041-c3a2-4aae-d2d218c8b916'}
        label={label1 || 'Add Property'}
      />
    </div>
  );
};

export default PopupformhddivItem449;
