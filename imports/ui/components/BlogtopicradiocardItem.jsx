import React from 'react';
import BlogtopictagItem from './BlogtopictagItem';

const BlogtopicradiocardItem = ({ itemText, label }) => {
  return (
    <div className="blogtopic-radiocard">
      <BlogtopictagItem itemText={itemText || 'Technology'} />
      <div className="blogtopic-radiolabel">
        {label || 'AI Ethics in Business'}
      </div>
    </div>
  );
};

export default BlogtopicradiocardItem;
