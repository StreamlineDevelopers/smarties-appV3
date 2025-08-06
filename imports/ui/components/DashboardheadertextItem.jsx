import React from 'react';

const DashboardheadertextItem = ({ title }) => {
  return (
    <div className={'dashboard-headertext'}>
      <div className={'section-title'}>{title || 'OVERVIEW'}</div>
    </div>
  );
};

export default DashboardheadertextItem;
