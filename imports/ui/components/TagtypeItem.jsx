import React from 'react';

const TagtypeItem = ({}) => {
  return (
    <div className={'tag-type agent'}>
      <div className={'tag-type-icon'}>
        <img loading={'lazy'} src={'images/smarties-icon-agent.svg'} alt={''} />
      </div>
      <div>{'Agent'}</div>
    </div>
  );
};

export default TagtypeItem;
