import React from 'react';
import HeaderitemItem from './HeaderitemItem';

const HeaderlistItem = ({ name, dataName, id, name1, dataName1, id1 }) => {
  return (
    <div className={'header-list'}>
      <HeaderitemItem
        name={'header-name-2'}
        dataName={'Header Name 2'}
        id={'header-name-2'}
        name1={'header-value-2'}
        dataName1={'Header Value 2'}
        id1={'header-value-2'}
      />
    </div>
  );
};

export default HeaderlistItem;
