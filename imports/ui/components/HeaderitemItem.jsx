import React from 'react';
import FormcolItem377 from './FormcolItem377';

const HeaderitemItem = ({ name, dataName, id, name1, dataName1, id1 }) => {
  return (
    <div className={'header-item'}>
      <FormcolItem377
        name={'header-name-2'}
        dataName={'Header Name 2'}
        placeholder={'Header Name'}
        id={'header-name-2'}
      />
      <FormcolItem377
        name={'header-value-2'}
        dataName={'Header Value 2'}
        placeholder={'Value'}
        id={'header-value-2'}
      />
      <div className={'property-icon'}>
        <img
          loading={'lazy'}
          src={'../images/smarties-filetrash.svg'}
          alt={''}
        />
      </div>
    </div>
  );
};

export default HeaderitemItem;
