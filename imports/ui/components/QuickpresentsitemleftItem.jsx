import React from 'react';

const QuickpresentsitemleftItem = ({ itemText }) => {
  return (
    <div className="quickpresents-item-left">
      <div className="quickpresents-itemtext">
        {itemText || 'Limited-time discount'}
      </div>
    </div>
  );
};

export default QuickpresentsitemleftItem;
