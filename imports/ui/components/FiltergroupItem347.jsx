import React from 'react';
import FiltergrouprowItem341 from './FiltergrouprowItem341';

const FiltergroupItem347 = ({ label, label1, label2 }) => {
  return (
    <div className="filter-group">
      <div className="filter-label">by Status</div>
      <FiltergrouprowItem341
        label={label || 'Active'}
        label1={label1 || 'Pending'}
        label2={label2 || 'Closed'}
      />
    </div>
  );
};

export default FiltergroupItem347;
