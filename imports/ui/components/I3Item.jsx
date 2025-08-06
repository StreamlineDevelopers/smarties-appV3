import React from 'react';

const I3Item = ({ src }) => {
  return (
    <div className="i-3">
      <div className="svg-4">
        <img
          src={src || '../images/Frame_39.svg'}
          loading="lazy"
          width="10"
          height="16"
          alt=""
          className="frame-style-30"
        />
      </div>
    </div>
  );
};

export default I3Item;
