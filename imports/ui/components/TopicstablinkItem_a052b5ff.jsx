import React from 'react';

const TopicstablinkItem_a052b5ff = ({ dataWTab, divText }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className={'topics-tablink w-inline-block w-tab-link'}
    >
      <div>{divText || 'Casual'}</div>
    </a>
  );
};

export default TopicstablinkItem_a052b5ff;
