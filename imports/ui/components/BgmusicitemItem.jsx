import React from 'react';
import BgmusicitemleftItem from './BgmusicitemleftItem';

const BgmusicitemItem = ({ divText }) => {
  return (
    <div className="bg-music-item">
      <BgmusicitemleftItem divText={divText || 'Upbeat Corporate'} />
      <div className="voiceoption-preview-play">
        <img src="../images/smarties-audio-play.svg" loading="lazy" alt="" />
      </div>
    </div>
  );
};

export default BgmusicitemItem;
