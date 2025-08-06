import React from 'react';

const MessagepopupfilterselectItem = ({ optionText }) => {
  return (
    <select
      id={'field-2'}
      name={'field-2'}
      data-name={'Field 2'}
      className={'messagepopup-filterselect w-select'}
    >
      <option value={''}>{optionText || 'Script Author'}</option>
      <option value={'First'}>First choice</option>
      <option value={'Second'}>Second choice</option>
      <option value={'Third'}>Third choice</option>
    </select>
  );
};

export default MessagepopupfilterselectItem;
