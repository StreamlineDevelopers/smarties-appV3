import React from 'react';

// Component: CardformrowleftItem32
// Type: repetition
// Props: ["src","textDiv","textDiv1"]

const CardformrowleftItem32 = ({ src, textDiv, textDiv1}) => {
  return (
    <div className="card-form-row-left"><div className="smarties-icon-card-row"><img width="34" height="34" alt="" src={src || "https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa183374063fd8ed3e14_smarties-icon-timeout.svg"} loading="lazy" /></div><div className="div-block-12"><div className="card-form-row-text">{textDiv || 'Timeout'}</div><div className="card-form-row-description">{textDiv1 || 'The number of seconds to wait before processing the user\'s keypad input. Set to 0 to only wait for a delimiter.'}</div></div></div>
  );
};

export default CardformrowleftItem32;