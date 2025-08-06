import React from 'react';
import FiltergrouprowItem from './FiltergrouprowItem';

const FiltergroupItem = ({ props }) => {
  return (
    <div className="filter-group">
      <div className="filter-label">Tag</div>
      <FiltergrouprowItem />
    </div>
  );
};

export default FiltergroupItem;
