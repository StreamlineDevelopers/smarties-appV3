import React from 'react';

// Component: ButtonaddmessageItem
// Type: repetition
// Props: ["dataWId","textDiv"]

const ButtonaddmessageItem = ({ dataWId, textDiv}) => {
  return (
    <div data-w-id={dataWId || "1849b75f-9350-98c1-3481-367f0109f99d"} className="button-addmessage"><div className="button-label">{textDiv || 'Add Property'}</div><img loading="lazy" src="../images/smarties-plus-dark.svg" alt="" /></div>
  );
};

export default ButtonaddmessageItem;