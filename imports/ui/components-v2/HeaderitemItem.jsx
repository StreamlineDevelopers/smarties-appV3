import React from 'react';

// Component: HeaderitemItem
// Type: repetition
// Props: ["name","dataName","id","name1","dataName1","id1"]

const HeaderitemItem = ({ name, dataName, id, name1, dataName1, id1}) => {
  return (
    <div className="header-item"><div className="form-col"><div className="form-control"><input className="form-input w-input" maxlength="256" name={name || "header-name-2"} data-name={dataName || "Header Name 2"} placeholder="Header Name" type="text" id={id || "header-name-2"} /></div></div><div className="form-col"><div className="form-control"><input className="form-input w-input" maxlength="256" name={name1 || "header-value-2"} data-name={dataName1 || "Header Value 2"} placeholder="Value" type="text" id={id1 || "header-value-2"} /></div></div><div className="property-icon"><img loading="lazy" src="../images/smarties-filetrash.svg" alt="" /></div></div>
  );
};

export default HeaderitemItem;