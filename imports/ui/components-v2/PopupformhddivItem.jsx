import React from 'react';

// Component: PopupformhddivItem
// Type: repetition
// Props: ["textDiv","dataWId","textDiv1"]

const PopupformhddivItem = ({ textDiv, dataWId, textDiv1, onClick = () => { } }) => {
  return (
    <div className="popup-form-hd-div"><div className="form-hd-div-left"><div className="table-date-hd-text">{textDiv || 'Parameters'}</div></div><div className="form-hd-div-right"><div data-w-id={dataWId || "1849b75f-9350-98c1-3481-367f0109f99d"} className="button-addmessage" onClick={onClick}><div className="button-label">{textDiv1 || 'Add Property'}</div><img loading="lazy" src="../images/smarties-plus-dark.svg" alt="" /></div></div></div>
  );
};

export default PopupformhddivItem;