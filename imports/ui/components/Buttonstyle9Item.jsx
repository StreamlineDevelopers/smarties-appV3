import React from 'react';

const Buttonstyle9Item = ({ src }) => {
  return (
    <a href="#" target="_blank" className="button-style-9">
      <div className="frame-style-22">
        <img
          src={src || '../images/Frame_19.svg'}
          loading="lazy"
          width="10.5"
          height="14"
          alt=""
          className="frame-style-21"
        />
      </div>
    </a>
  );
};

export default Buttonstyle9Item;
