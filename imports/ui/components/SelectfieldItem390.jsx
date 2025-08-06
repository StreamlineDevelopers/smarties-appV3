import React from 'react';

const SelectfieldItem390 = ({ id, name, dataName, value, optionText }) => {
  return (
    <select
      id={id || 'parameter-type-2'}
      name={name || 'parameter-type-2'}
      data-name={dataName || 'Parameter Type 2'}
      className={'select-field w-select'}
    >
      <option value={value || 'string'}>{optionText || 'string'}</option>
      <option value={'number'}>number</option>
      <option value={'boolean'}>boolean</option>
      <option value={'object'}>object</option>
      <option value={'array'}>array</option>
    </select>
  );
};

export default SelectfieldItem390;
