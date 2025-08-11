import React from 'react';
import IconseoItem_d39978a8 from './IconseoItem_d39978a8';

const SeotagItem = ({ divText }) => {
  return (
    <div className={'seo-tag'}>
      <IconseoItem_d39978a8 />
      <div>{divText || 'SEO: 92'}</div>
    </div>
  );
};

export default SeotagItem;
