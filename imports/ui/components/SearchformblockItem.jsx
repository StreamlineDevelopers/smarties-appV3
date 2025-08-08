import React from 'react';
import WfformsearchformItem from './WfformsearchformItem';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';

const SearchformblockItem = ({ handleSearch = () => { } }) => {
  return (
    <div className={'search-formblock w-form'}>
      <WfformsearchformItem handleSearch={handleSearch} />
      <WformdoneItem />
      <WformfailItem />
    </div>
  );
};

export default SearchformblockItem;
