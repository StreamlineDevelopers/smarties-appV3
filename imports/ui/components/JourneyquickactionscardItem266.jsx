import React from 'react';
import JourneyquickactionscardleftItem263 from './JourneyquickactionscardleftItem263';

const JourneyquickactionscardItem266 = ({ src, title, itemText }) => {
  return (
    <a href="#" className="journey-quickactions-card w-inline-block">
      <JourneyquickactionscardleftItem263
        src={src || '../images/smarties-action-icon-04-icon.svg'}
        title={title || 'Write Blog'}
        itemText={itemText || 'AI-assisted content creation'}
      />
      <div className="journey-quickactions-card-arrow">
        <img src="../images/smarties-flow-arrow.svg" loading="lazy" alt="" />
      </div>
    </a>
  );
};

export default JourneyquickactionscardItem266;
