import React from 'react';
import JourneyquickactionscardleftItem from './JourneyquickactionscardleftItem';

const JourneyquickactionscardItem = ({ title, itemText }) => {
  return (
    <a href="#" className="journey-quickactions-card w-inline-block">
      <JourneyquickactionscardleftItem
        title={title || 'Repurpose as Tweet Thread'}
        itemText={
          itemText ||
          'Break down key points into a 6-part tweet thread to drive traffic.'
        }
      />
    </a>
  );
};

export default JourneyquickactionscardItem;
