import React from 'react';

// Component: RowselectItem
// Type: repetition
// Props: ["id","name","dataName","textOption"]

const RowselectItem = ({ id, name, dataName, textOption}) => {
  return (
    <div className="row-select"><div className="form-control-2"><select id={id || "Advanced-Audio-Recording"} name={name || "Advanced-Audio-Recording"} data-name={dataName || "Advanced Audio Recording"} className="select-field w-select"><option value="">{textOption || 'Select Format'}</option><option value="deepgram">deepgram</option><option value="Second">Second choice</option><option value="Third">Third choice</option></select></div></div>
  );
};

export default RowselectItem;