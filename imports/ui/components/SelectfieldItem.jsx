import React from 'react';

const SelectfieldItem = ({
  id,
  name,
  dataName,
  value,
  optionText,
  optionText1,
}) => {
  return (
    <select
      id={id || 'Provider'}
      name={name || 'Provider'}
      data-name={dataName || 'Provider'}
      className={'select-field w-select'}
    >
      <option value={''}>{optionText1 || 'Select one...'}</option>
      <option value={value || 'openai'}>{optionText || 'openai'}</option>
      <option value={'Second'}>Second choice</option>
      <option value={'Third'}>Third choice</option>
    </select>
  );
};

export default SelectfieldItem;
