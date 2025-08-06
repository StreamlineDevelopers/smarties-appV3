import React from 'react';

const TopictagItem = ({ divText }) => {
  return (
    <div className="topictag bg-blue">
      <div>{divText || 'Technology'}</div>
    </div>
  );
};

export default TopictagItem;
