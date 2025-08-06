import React from 'react';
import FilterdropdowntoggleItem277 from './FilterdropdowntoggleItem277';
import FilterdropdownlistItem from './FilterdropdownlistItem';

const FilterdropdownItem283 = ({ divText }) => {
  return (
    <div
      data-hover="false"
      data-delay="0"
      className="filter-dropdown w-dropdown"
    >
      <FilterdropdowntoggleItem277 divText={divText || 'Role'} />
      <FilterdropdownlistItem />
    </div>
  );
};

export default FilterdropdownItem283;
