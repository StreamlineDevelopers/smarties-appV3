import React from 'react';
import WfformsearchformItem from './WfformsearchformItem';
import WformdoneItem from './WformdoneItem';
import WformfailItem from './WformfailItem';

const SearchformblockItem = ({ props }) => {
  return (
    <div className="search-formblock w-form">
      <WfformsearchformItem />
      <WformdoneItem />
      <WformfailItem />
    </div>
  );
};

export default SearchformblockItem;
