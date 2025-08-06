import React from 'react';

const CostinfoItem = ({ label, label1 }) => {
  return (
    <div className="cost-info">
      <div className="cost-label">{label || 'Cost'}</div>
      <div className="cost-label">{label1 || '~$0.08 /min'}</div>
    </div>
  );
};

export default CostinfoItem;
