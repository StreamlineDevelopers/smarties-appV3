import React from 'react';

const TopicstablinkItem = ({}) => {
  return (
    <a
      data-w-tab={'Tab 1'}
      className={'topics-tablink w-inline-block w-tab-link w--current'}
    >
      <div>{'All Topics'}</div>
    </a>
  );
};

export default TopicstablinkItem;
