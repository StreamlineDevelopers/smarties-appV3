import React from 'react';
import FilterdropdowntoggleItem235 from './FilterdropdowntoggleItem235';
import FilterdropdownlistItem from './FilterdropdownlistItem';

const FilterdropdownItem241 = ({ divText }) => {
  return (
    <div
      data-hover={'false'}
      data-delay={'0'}
      className={'filter-dropdown w-dropdown'}
    >
      <FilterdropdowntoggleItem235 divText={'Role'} />
      <FilterdropdownlistItem />
    </div>
  );
};

export default FilterdropdownItem241;
