import React from 'react';
import SocialtopictooltipItem from './SocialtopictooltipItem';

const SocialtopictooltipdivItem = ({ dataWId }) => {
  return (
    <div className={'social-topic-tooltip-div'}>
      <div
        data-w-id={dataWId || '183aca65-1bf9-f04d-110c-920eb3d9fda9'}
        className={'social-topic-tooltip-icon'}
      >
        <img
          loading={'lazy'}
          src={'../images/smarties-icon-tip.svg'}
          alt={''}
        />
      </div>
      <SocialtopictooltipItem />
    </div>
  );
};

export default SocialtopictooltipdivItem;
