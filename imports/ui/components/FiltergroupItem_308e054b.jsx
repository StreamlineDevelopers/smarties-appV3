import React from 'react';
import FiltergrouprowItem_dbc0e321 from './FiltergrouprowItem_dbc0e321';

const FiltergroupItem_308e054b = ({ label, label1, label2 }) => {
  return (
    <div className={'filter-group'}>
      <div className={'filter-label'}>{'by Status'}</div>
      <FiltergrouprowItem_dbc0e321
        label={'Active'}
        label1={'Pending'}
        label2={'Closed'}
      />
    </div>
  );
};

export default FiltergroupItem_308e054b;
