import React from 'react';

// Component: PropertyitemItem
// Type: repetition
// Props: ["dataWId"]

const PropertyitemItem = ({ dataWId}) => {
  return (
    <div className="property-item"><div className="property-item-left"><div className="form-label">property-01</div></div><div className="property-item-right"><div className="property-icon"><img loading="lazy" src="../images/Edit-3.svg" alt="" /></div><div data-w-id={dataWId || "1849b75f-9350-98c1-3481-367f0109f9ac"} className="property-icon"><img loading="lazy" src="../images/smarties-filetrash.svg" alt="" /></div></div></div>
  );
};

export default PropertyitemItem;