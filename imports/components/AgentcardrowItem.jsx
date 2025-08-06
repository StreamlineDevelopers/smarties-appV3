import React from 'react';
import AgentcardrowtextcontentItem from './AgentcardrowtextcontentItem';

const AgentcardrowItem = ({ props }) => {
  return (
    <div className="agent-card-row">
      <div className="avatar-agent">
        <img
          loading="lazy"
          src="images/smarties-agent-not-assigned.svg"
          alt=""
        />
      </div>
      <AgentcardrowtextcontentItem />
    </div>
  );
};

export default AgentcardrowItem;
