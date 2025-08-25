import React from 'react';

// Component: FormhddivrightItem
// Type: repetition
// Props: ["dataWId","textDiv"]

const FormhddivrightItem = ({ dataWId, textDiv}) => {
  return (
    <div className="form-hd-div-right"><div data-w-id={dataWId || "1849b75f-9350-98c1-3481-367f0109f99d"} className="button-addmessage"><div className="button-label">{textDiv || 'Add Property'}</div><img loading="lazy" src="../images/smarties-plus-dark.svg" alt="" /></div></div>
  );
};

export default FormhddivrightItem;