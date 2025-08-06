import React from 'react';
import AudiopreviewinfoItem from './AudiopreviewinfoItem';
import AudiopreviewcontrolrowItem from './AudiopreviewcontrolrowItem';

const AudiopreviewItem = ({}) => {
  return (
    <div className={'audiopreview'}>
      <div className={'audiowave-preview'}>
        <img
          src={'../images/audio-wave.svg'}
          loading={'lazy'}
          width={'389.5'}
          height={'29'}
          alt={''}
          className={'audio-wave'}
        />
      </div>
      <AudiopreviewinfoItem />
      <AudiopreviewcontrolrowItem />
    </div>
  );
};

export default AudiopreviewItem;
