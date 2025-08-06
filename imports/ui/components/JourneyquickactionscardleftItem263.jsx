import React from 'react';
import ActivityfeedtextcontentItem260 from './ActivityfeedtextcontentItem260';

const JourneyquickactionscardleftItem263 = ({ src, title, itemText }) => {
  return (
    <div className="journey-quickactions-card-left">
      <div className="card-icon bg-green">
        <img
          src={src || '../images/smarties-action-icon-04-icon.svg'}
          loading="lazy"
          width="20"
          height="20"
          alt=""
          className="icon-style1"
        />
      </div>
      <ActivityfeedtextcontentItem260
        title={title || 'Write Blog'}
        itemText={itemText || 'AI-assisted content creation'}
      />
    </div>
  );
};

export default JourneyquickactionscardleftItem263;
