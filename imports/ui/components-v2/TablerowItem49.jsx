import React from 'react';

// Component: TablerowItem49
// Type: repetition
// Props: []

const TablerowItem49 = ({ file, onClick = () => { }, isCurrent = false }) => {
  return (
    <div className="table-row" onClick={onClick} style={{ backgroundColor: isCurrent && "#e1d5d1" }}><div className="table-cell-div stretch"><div className="table-doctitle"><div className="table-fileicon"><img src="../images/smarties-file-dark.svg" loading="lazy" alt="" /></div><div className="table-doctitle-text">{file.name}</div></div></div><div className="table-cell-div stretch"><div className="settings-sublabel">{file.size}</div></div><div className="table-cell-div stretch"><div className="settings-sublabel">May 6, 2025</div></div><div className="table-cell-div _w-5"><div className="table-menu">
      {/* <img width="15" height="15" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0a45e15d21303356de_smarties-icon-menu.svg" loading="lazy" className="image-100" /> */}
    </div></div></div>
  );
};

export default TablerowItem49;  