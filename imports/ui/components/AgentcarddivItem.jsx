import React from 'react';
import AgentcardItem from './AgentcardItem';

const AgentcarddivItem = ({ dataWId }) => {
  return (
    <div className={'agent-card-div'}>
      <div
        data-w-id={dataWId || 'd640b168-e14b-d21f-cb34-702cefb626af'}
        className={'card-inbox-agent-avatar'}
      >
        <img
          loading={'lazy'}
          src={'images/smarties-agent-not-assigned.svg'}
          alt={''}
        />
      </div>
      <AgentcardItem />
    </div>
  );
};

export default AgentcarddivItem;
