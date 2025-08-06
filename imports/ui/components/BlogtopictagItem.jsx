import React from 'react';

const BlogtopictagItem = ({ itemText }) => {
  return (
    <div className={'blogtopic-tag'}>
      <div className={'daily-trend-item'}>{itemText || 'Technology'}</div>
    </div>
  );
};

export default BlogtopictagItem;
