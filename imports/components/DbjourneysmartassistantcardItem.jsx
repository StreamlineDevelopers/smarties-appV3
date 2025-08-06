
import React from 'react';
import DbjourneysmartassistantcardtopItem from './DbjourneysmartassistantcardtopItem';
import DbjourneysmartassistantcardbodyItem from './DbjourneysmartassistantcardbodyItem';
import DbjourneysmartassistantcardbotItem from './DbjourneysmartassistantcardbotItem';

const DbjourneysmartassistantcardItem = ({ props }) => {
  return (
    <div className="db-journey-smartassistant-card"><DbjourneysmartassistantcardtopItem /><DbjourneysmartassistantcardbodyItem title="This blog is performing 32% above average" itemText="Your article 7 Ways to Automate Customer Journeys is getting exceptional engagement. Consider creating" /><DbjourneysmartassistantcardbotItem /></div>
  );
};

export default DbjourneysmartassistantcardItem;
