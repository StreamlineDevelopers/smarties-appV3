import React from 'react';

// Component: PropertylistItem
// Type: repetition
// Props: ["dataWId"]

const PropertylistItem = ({ dataWId, name = "", size = 0, showRow = true, index, onClick = () => { }, onEdit = () => { } }) => {
  return (
    <div style={{ display: showRow ? "block" : "none" }} className="property-list"><div className="property-item"><div className="property-item-left"><div className="form-label">{name}</div></div><div className="property-item-right"><div onClick={onEdit} className="property-icon"><img loading="lazy" src="../images/Edit-3.svg" alt="" /></div><div onClick={onClick} data-w-id={dataWId || "1849b75f-9350-98c1-3481-367f0109f9ac"} className="property-icon"><img loading="lazy" src="../images/smarties-filetrash.svg" alt="" /></div></div></div></div>
  );
};

export default PropertylistItem;