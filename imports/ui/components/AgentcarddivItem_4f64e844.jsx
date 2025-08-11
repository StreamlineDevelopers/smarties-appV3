import React from 'react';
import AgentcardItem_20245609 from './AgentcardItem_20245609';

const AgentcarddivItem_4f64e844 = ({ dataWId }) => {
  return (
    <div className={'agent-card-div'}>
      <div
        data-w-id={dataWId || 'fc19d0d7-f5e8-4f20-e129-a4d9753767c8'}
        className={'card-inbox-agent-avatar'}
      >
        <img loading={'lazy'} src={'images/smarties-avatar-5.svg'} alt={''} />
      </div>
      <AgentcardItem_20245609 />
    </div>
  );
};

export default AgentcarddivItem_4f64e844;
