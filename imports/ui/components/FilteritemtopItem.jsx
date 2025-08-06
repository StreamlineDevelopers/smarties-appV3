import React from 'react';

const FilteritemtopItem = ({ dataWId, divText }) => {
  return (
    <div
      data-w-id={dataWId || '3dae18f8-3116-efb3-0cd3-8fba9cd40734'}
      className="filter-item-top"
    >
      <div>{divText || 'Title'}</div>
      <div className="filter-item-chevron">
        <img
          src="images/smarties-filter-chevrondown.svg"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};

export default FilteritemtopItem;
