import React from 'react';

const LoyaltycardmidcolItem = ({ label, divText }) => {
  return (
    <div className="loyalty-card-mid-col">
      <div className="loyalty-card-label">{label || 'Retention'}</div>
      <div className="loyalty-card-avlue">{divText || '68%'}</div>
    </div>
  );
};

export default LoyaltycardmidcolItem;
