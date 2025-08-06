import React from 'react';

const DbstatcardleftItem = ({ title, divText }) => {
  return (
    <div className="db-stat-card-left">
      <div className="stat-title small">{title || 'Lead Time'}</div>
      <div className="stat-value smaller">{divText || '12m 45s'}</div>
    </div>
  );
};

export default DbstatcardleftItem;
