import React from 'react';
import AgentcardrowItem from './AgentcardrowItem';

const AgentcardItem = ({}) => {
  return (
    <div className={'agent-card'}>
      <div className={'label-agents'}>{'Agents'}</div>
      <AgentcardrowItem />
    </div>
  );
};

export default AgentcardItem;
