import React from 'react';

const TopicstablinkItem392 = ({ dataWTab, divText }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className="topics-tablink w-inline-block w-tab-link"
    >
      <div>{divText || 'Casual'}</div>
    </a>
  );
};

export default TopicstablinkItem392;
