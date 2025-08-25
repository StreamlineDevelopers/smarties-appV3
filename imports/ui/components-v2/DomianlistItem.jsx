import React from 'react';

// Component: HeaderlistItem
// Type: repetition
// Props: ["name","dataName","id","name1","dataName1","id1"]

const DomainlistItem = ({ name, dataName, id, name1, dataName1, id1, index, isAddDomainOpen, domain, handleDomainChange, handleDomainRemove }) => {
  return (
    <div style={{ display: isAddDomainOpen ? "block" : "none" }} className="header-list">
      <div className="header-item">
        <div className="form-col">
          <div className="form-control">
          </div>
        </div>
        <div className="form-control" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <input value={domain.value} onChange={(e) =>
            handleDomainChange(index, 'value', e.target.value)} className="form-input w-input" maxlength="256" name={name1 || "header-value-2"} data-name={dataName1 || "Header Value 2"} placeholder="Value" type="text" id={id1 || "header-value-2"}
          />
          <div className="property-icon" onClick={() =>
            handleDomainRemove(index)}>
            <img loading="lazy" src="../images/smarties-filetrash.svg" alt="" />
          </div>
        </div>
      </div>
    </div>);
};

export default DomainlistItem;