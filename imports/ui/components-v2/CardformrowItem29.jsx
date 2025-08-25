import React from 'react';

// Component: CardformrowItem29
// Type: repetition
// Props: ["src","textDiv","textDiv1","id","name","dataName","textOption"]

const CardformrowItem29 = ({ src, textDiv, textDiv1, id, name, dataName, textOption}) => {
  return (
    <div className="card-form-row"><div className="card-form-row-left"><div className="smarties-icon-card-row"><img width="34" height="34" alt="" src={src || "https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa188f64b8715716271d_smarties-icon-mic.svg"} loading="lazy" /></div><div><div className="card-form-row-text">{textDiv || 'Audio Recording'}</div><div className="card-form-row-description">{textDiv1 || 'Record the conversation with the assistant.'}</div></div></div><div className="row-select"><div className="form-control-2"><select id={id || "Advanced-Audio-Recording"} name={name || "Advanced-Audio-Recording"} data-name={dataName || "Advanced Audio Recording"} className="select-field w-select"><option value="">{textOption || 'Select Format'}</option><option value="deepgram">deepgram</option><option value="Second">Second choice</option><option value="Third">Third choice</option></select></div></div></div>
  );
};

export default CardformrowItem29;