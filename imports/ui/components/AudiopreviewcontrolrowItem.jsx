import React from 'react';
import AudiopreviewdirectioncontrolItem from './AudiopreviewdirectioncontrolItem';

const AudiopreviewcontrolrowItem = ({ props }) => {
  return (
    <div className="audiopreview-control-row">
      <AudiopreviewdirectioncontrolItem src="../images/Frame_11.svg" />
      <a href="#" target="_blank" className="audiopreview-playbtn">
        <img
          src="../images/Frame_26.svg"
          loading="lazy"
          width="13.5"
          height="18"
          alt=""
          className="frame-style-19"
        />
      </a>
      <AudiopreviewdirectioncontrolItem src="../images/Frame_23.svg" />
    </div>
  );
};

export default AudiopreviewcontrolrowItem;
