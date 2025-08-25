import React from 'react';

// Component: DomainlistItem
// Type: repetition
// Props: ["dataWId","dataWId1"]

const DomainlistItem = ({ dataWId, dataWId1, domain = "example.com", onDelete = () => { }, onClick = () => { } }) => {
  return (
    <div style={{ display: domain ? "block" : "none" }} className="domain-list"><div className="domain-item"><div className="property-item-left"><a href="#" className="property-link">{domain}</a></div><div className="property-item-right"><div onClick={onClick} className="property-icon"><img loading="lazy" src="../images/Edit-3.svg" alt="" /></div><div data-w-id={dataWId || "5cefa7b3-c9ea-0bf4-45d3-c9b1b57787b1"} onClick={onDelete} className="property-icon"><img loading="lazy" src="../images/smarties-filetrash.svg" alt="" /></div></div></div></div>
  );
};

export default DomainlistItem;