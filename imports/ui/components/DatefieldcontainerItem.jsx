import React from 'react';
import DatefielddashItem from './DatefielddashItem';

const DatefieldcontainerItem = ({}) => {
  return (
    <div className={'datefield_container'}>
      <input
        className={'filter-text-field w-input'}
        maxlength={'256'}
        name={'First-Name-4'}
        data-name={'First Name 4'}
        placeholder={'2022-01-01'}
        type={'text'}
        id={'First-Name-4'}
        required
      />
      <DatefielddashItem />
    </div>
  );
};

export default DatefieldcontainerItem;
