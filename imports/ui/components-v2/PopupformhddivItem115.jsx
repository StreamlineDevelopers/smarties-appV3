import React from 'react';

// Component: PopupformhddivItem115
// Type: repetition
// Props: ["textDiv","dataWId","textDiv1"]

const PopupformhddivItem115 = ({ textDiv, dataWId, textDiv1, onClick, type = "" }) => {
  return (
    <div className="popup-form-hd-div"><div className="form-hd-div-left"><div className="form-label">{textDiv || 'Parameters'}</div></div><div className="form-hd-div-right">{type != "message" && <div data-w-id={dataWId || "5d5b0e1b-d041-c3a2-4aae-d2d218c8b916"} className="button-addmessage"> <div onClick={onClick} className="button-label">{textDiv1 || 'Add Property'}</div><img loading="lazy" src="../images/smarties-plus-dark.svg" alt="" /></div>}</div></div>
  );
};

export default PopupformhddivItem115;