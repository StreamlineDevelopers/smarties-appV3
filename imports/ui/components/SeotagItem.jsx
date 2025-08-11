import React from 'react';
import IconseoItem_23f814d0 from './IconseoItem_23f814d0';

const SeotagItem = ({ divText }) => {
  return (
    <div className={'seo-tag'}>
      <IconseoItem_23f814d0 />
      <div>{divText || 'SEO: 92'}</div>
    </div>
  );
};

export default SeotagItem;
