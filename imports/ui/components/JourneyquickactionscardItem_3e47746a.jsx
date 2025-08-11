import React from 'react';
import JourneyquickactionscardleftItem_0a9a66f1 from './JourneyquickactionscardleftItem_0a9a66f1';

const JourneyquickactionscardItem_3e47746a = ({ src, title, itemText }) => {
  return (
    <a href={'#'} className={'journey-quickactions-card w-inline-block'}>
      <JourneyquickactionscardleftItem_0a9a66f1
        src={'../images/smarties-action-icon-04-icon.svg'}
        title={'Write Blog'}
        itemText={'AI-assisted content creation'}
      />
      <div className={'journey-quickactions-card-arrow'}>
        <img
          src={'../images/smarties-flow-arrow.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
    </a>
  );
};

export default JourneyquickactionscardItem_3e47746a;
