import React from 'react';
import IconseoItem478 from './IconseoItem478';

const SeotagItem = ({ divText }) => {
  return (
    <div className="seo-tag">
      <IconseoItem478 />
      <div>{divText || 'SEO: 92'}</div>
    </div>
  );
};

export default SeotagItem;
