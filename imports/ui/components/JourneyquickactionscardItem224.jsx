import React from 'react';
import JourneyquickactionscardleftItem221 from './JourneyquickactionscardleftItem221';

const JourneyquickactionscardItem224 = ({ src, title, itemText }) => {
  return (
    <a href={'#'} className={'journey-quickactions-card w-inline-block'}>
      <JourneyquickactionscardleftItem221
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

export default JourneyquickactionscardItem224;
