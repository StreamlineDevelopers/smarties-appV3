import React from 'react';

// Component: DashboardheadertextItem
// Type: repetition
// Props: ["textDiv"]

const DashboardheadertextItem = ({ textDiv}) => {
  return (
    <div className="dashboard-headertext"><div className="section-title">{textDiv || 'OVERVIEW'}</div></div>
  );
};

export default DashboardheadertextItem;