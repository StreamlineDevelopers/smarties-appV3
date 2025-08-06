import React from 'react';
import FiltertitletagsItem from './FiltertitletagsItem';
import BtnaddfiltertagItem from './BtnaddfiltertagItem';

const FilteritemtitletagsItem = ({}) => {
  return (
    <div className={'filter-item-title-tags'}>
      <FiltertitletagsItem divText={'VP'} />
      <FiltertitletagsItem divText={'Director'} />
      <FiltertitletagsItem divText={'Manager'} />
      <BtnaddfiltertagItem />
    </div>
  );
};

export default FilteritemtitletagsItem;
