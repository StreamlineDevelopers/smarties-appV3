import React from 'react';

const DbjourneyvaluecontainItem = ({ divText, divText1 }) => {
  return (
    <div className="db-journey-value-contain">
      <div className="stat-value">{divText || '14,382'}</div>
      <div className="db-journey-subtext">{divText1 || 'interactions'}</div>
    </div>
  );
};

export default DbjourneyvaluecontainItem;
