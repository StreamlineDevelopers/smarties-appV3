import React from 'react';

const Divblock18Item = ({ divText, itemText }) => {
  return (
    <div className="div-block-18">
      <div className="stat-value smaller">
        {divText || '"Limited offer: Free shipping"'}
      </div>
      <div className="uploadeditem-filesize">
        {itemText || 'Shown 2,458 times'}
      </div>
    </div>
  );
};

export default Divblock18Item;
