import React from 'react';
import DbjourneyextrastatcontainerItem from './DbjourneyextrastatcontainerItem';
import DbjourneyextrabtncontainerItem from './DbjourneyextrabtncontainerItem';

const DbjourneysmartassistantcardbotItem = ({}) => {
  return (
    <div className={'db-journey-smartassistant-card-bot'}>
      <DbjourneyextrastatcontainerItem
        src={'../images/smarties-assistant-icon-01.svg'}
        divText={'3.2k views in 48 hours'}
      />
      <DbjourneyextrabtncontainerItem />
    </div>
  );
};

export default DbjourneysmartassistantcardbotItem;
