import React from 'react';

const Selectfield2Item = ({ optionText }) => {
  return (
    <select
      id="field-2"
      name="field-2"
      data-name="Field 2"
      className="select-field-2 w-select"
    >
      <option value="">{optionText || 'All Status'}</option>
      <option value="First">First choice</option>
      <option value="Second">Second choice</option>
      <option value="Third">Third choice</option>
    </select>
  );
};

export default Selectfield2Item;
