import React from 'react';
import ActivityfeedtextcontentItem_860691cb from './ActivityfeedtextcontentItem_860691cb';

const JourneyquickactionscardleftItem_0a9a66f1 = ({ src, title, itemText }) => {
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
      <ActivityfeedtextcontentItem_860691cb
        title={'Write Blog'}
        itemText={'AI-assisted content creation'}
      />
    </div>
  );
};

export default JourneyquickactionscardleftItem_0a9a66f1;
