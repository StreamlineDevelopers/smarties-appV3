import React from 'react';

const AudiopreviewdirectioncontrolItem = ({ src }) => {
  return (
    <a href="#" target="_blank" className="audiopreview-direction-control">
      <div className="frame-style-18">
        <img
          src={src || '../images/Frame_11.svg'}
          loading="lazy"
          width="11.25"
          height="18"
          alt=""
          className="frame-style-19"
        />
      </div>
    </a>
  );
};

export default AudiopreviewdirectioncontrolItem;
