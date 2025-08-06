import React from 'react';
import AudiopreviewdurationrowItem from './AudiopreviewdurationrowItem';
import AudiopreviewsliderItem from './AudiopreviewsliderItem';

const AudiopreviewinfoItem = ({}) => {
  return (
    <div className={'audio-preview-info'}>
      <AudiopreviewdurationrowItem />
      <AudiopreviewsliderItem />
    </div>
  );
};

export default AudiopreviewinfoItem;
