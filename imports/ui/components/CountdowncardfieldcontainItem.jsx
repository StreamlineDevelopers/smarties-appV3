import React from 'react';

const CountdowncardfieldcontainItem = ({ placeholder, divText }) => {
  return (
    <div className={'countdown-card-field-contain'}>
      <input
        className={'countdown-card-textfield w-input'}
        maxlength={'256'}
        name={'field'}
        data-name={'Field'}
        placeholder={placeholder || '2'}
        type={'text'}
        id={'field'}
        required
      />
      <div className={'countdown-time'}>{divText || 'Hours'}</div>
    </div>
  );
};

export default CountdowncardfieldcontainItem;
