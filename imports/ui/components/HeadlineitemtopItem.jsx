import React from 'react';
import SeotagItem from './SeotagItem';

const HeadlineitemtopItem = ({ label, divText }) => {
  return (
    <div className="headline-item-top">
      <div className="headline-item-label">
        {label || '10 Ways AI is Transforming Digital Marketing in 2023'}
      </div>
      <SeotagItem divText={divText || 'SEO: 92'} />
    </div>
  );
};

export default HeadlineitemtopItem;
