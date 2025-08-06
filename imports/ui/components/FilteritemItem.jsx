import React from 'react';
import FilteritemtopItem from './FilteritemtopItem';
import FilteritembodyItem from './FilteritembodyItem';

const FilteritemItem = ({ dataWId, divText }) => {
  return (
    <div className="filter-item">
      <FilteritemtopItem
        dataWId={dataWId || '3dae18f8-3116-efb3-0cd3-8fba9cd40734'}
        divText={divText || 'Title'}
      />
      <FilteritembodyItem />
    </div>
  );
};

export default FilteritemItem;
