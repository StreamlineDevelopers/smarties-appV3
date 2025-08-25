import React from 'react';

// Component: DomainitemItem
// Type: repetition
// Props: ["dataWId"]

const DomainitemItem = ({ dataWId}) => {
  return (
    <div className="domain-item"><div className="property-item-left"><a href="#" className="property-link">https://www.domain.com/</a></div><div className="property-item-right"><div className="property-icon"><img loading="lazy" src="../images/Edit-3.svg" alt="" /></div><div data-w-id={dataWId || "5cefa7b3-c9ea-0bf4-45d3-c9b1b57787b1"} className="property-icon"><img loading="lazy" src="../images/smarties-filetrash.svg" alt="" /></div></div></div>
  );
};

export default DomainitemItem;