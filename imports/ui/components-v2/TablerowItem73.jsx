import React from 'react';

// Component: TablerowItem73
// Type: repetition
// Props: ["name","id","dataName","htmlFor"]

const TablerowItem73 = ({ name, id, dataName, htmlFor}) => {
  return (
    <div className="table-row"><div className="table-cell-div stretch"><div className="table-doctitle"><div className="table-fileicon"><img loading="lazy" src="../images/smarties-file-dark.svg" alt="" /></div><div className="table-doctitle-text">sample.txt</div></div></div><div className="table-cell-div stretch"><div className="settings-sublabel">12 KB</div></div><div className="table-cell-div stretch"><div className="settings-sublabel">May 6, 2025</div></div><div className="table-cell-div _w-5"><label className="w-checkbox table-checkbox-field"><div className="w-checkbox-input w-checkbox-input--inputType-custom tablecheckbox"></div><input type="checkbox" name={name || "check-add-file"} id={id || "check-add-file"} data-name={dataName || "check add file"} style={{"opacity":"0","position":"absolute","zIndex":"-1"}} /><span className="checkbox-label-2 w-form-label" htmlFor={htmlFor || "check-add-file"}>Checkbox</span></label></div></div>
  );
};

export default TablerowItem73;