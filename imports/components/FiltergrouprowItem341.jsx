import React from 'react';
import WcheckboxItem326 from './WcheckboxItem326';

const FiltergrouprowItem341 = ({ label, label1, label2 }) => {
  return (
    <div className="filter-group_row">
      <WcheckboxItem326
        name="checkbox-7"
        id="checkbox-7"
        dataName="Checkbox 7"
        htmlFor="checkbox-7"
        label={label || 'Active'}
      />
      <WcheckboxItem326
        name="checkbox-7"
        id="checkbox-7"
        dataName="Checkbox 7"
        htmlFor="checkbox-7"
        label={label1 || 'Pending'}
      />
      <WcheckboxItem326
        name="checkbox-7"
        id="checkbox-7"
        dataName="Checkbox 7"
        htmlFor="checkbox-7"
        label={label2 || 'Closed'}
      />
    </div>
  );
};

export default FiltergrouprowItem341;
