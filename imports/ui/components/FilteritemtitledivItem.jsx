import React from 'react';
import FilteritemtitletagsItem from './FilteritemtitletagsItem';

const FilteritemtitledivItem = ({ props }) => {
  return (
    <div className="filter-item-title-div">
      <input
        className="textfield w-input"
        maxlength="256"
        name="field"
        data-name="Field"
        placeholder="Filter by title"
        type="text"
        id="field"
        required
      />
      <FilteritemtitletagsItem />
    </div>
  );
};

export default FilteritemtitledivItem;
