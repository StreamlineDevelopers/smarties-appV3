import React from 'react';
import ActivityfeedtextcontentItem180 from './ActivityfeedtextcontentItem180';

const JourneyquickactionscardleftItem = ({ title, itemText }) => {
  return (
    <div className="journey-quickactions-card-left">
      <div className="card-icon bg-blue">
        <img
          src="../images/smarties-loyalty-icon-08.svg"
          loading="lazy"
          width="20"
          height="20"
          alt=""
          className="icon-style1"
        />
      </div>
      <ActivityfeedtextcontentItem180
        title={title || 'Repurpose as Tweet Thread'}
        itemText={
          itemText ||
          'Break down key points into a 6-part tweet thread to drive traffic.'
        }
      />
    </div>
  );
};

export default JourneyquickactionscardleftItem;
