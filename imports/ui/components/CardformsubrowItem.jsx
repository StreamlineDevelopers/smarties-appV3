import React from 'react';
import RowsliderItem from './RowsliderItem';

const CardformsubrowItem = ({ divText, divText1 }) => {
  return (
    <div className="card-form-subrow">
      <div>{divText || 'Speed'}</div>
      <RowsliderItem divText={divText1 || 'Normal'} />
    </div>
  );
};

export default CardformsubrowItem;
