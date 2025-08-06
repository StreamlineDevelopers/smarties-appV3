import React from 'react';
import ActivityfeedtextcontentItem218 from './ActivityfeedtextcontentItem218';

const JourneyquickactionscardleftItem221 = ({ src, title, itemText }) => {
  return (
    <div className={'journey-quickactions-card-left'}>
      <div className={'card-icon bg-green'}>
        <img
          src={src || '../images/smarties-action-icon-04-icon.svg'}
          loading={'lazy'}
          width={'20'}
          height={'20'}
          alt={''}
          className={'icon-style1'}
        />
      </div>
      <ActivityfeedtextcontentItem218
        title={'Write Blog'}
        itemText={'AI-assisted content creation'}
      />
    </div>
  );
};

export default JourneyquickactionscardleftItem221;
