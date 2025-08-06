import React from 'react';

const CardsettingshddivItem = ({ divText }) => {
  return (
    <div className="card-settings-hd-div">
      <div className="card-settings-hd">{divText || 'Upload Documents'}</div>
    </div>
  );
};

export default CardsettingshddivItem;
