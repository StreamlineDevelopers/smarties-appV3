import React from 'react';
import FiltergrouprowItem297 from './FiltergrouprowItem297';

const FiltergroupItem303 = ({ label, label1, label2 }) => {
  return (
    <div className={'filter-group'}>
      <div className={'filter-label'}>by Status</div>
      <FiltergrouprowItem297
        label={'Active'}
        label1={'Pending'}
        label2={'Closed'}
      />
    </div>
  );
};

export default FiltergroupItem303;
