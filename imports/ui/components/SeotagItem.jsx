import React from 'react';
import IconseoItem420 from './IconseoItem420';

const SeotagItem = ({ divText }) => {
  return (
    <div className={'seo-tag'}>
      <IconseoItem420 />
      <div>{divText || 'SEO: 92'}</div>
    </div>
  );
};

export default SeotagItem;
