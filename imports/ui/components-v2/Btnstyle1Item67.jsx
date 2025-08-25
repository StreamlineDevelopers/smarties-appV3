import React from 'react';

// Component: Btnstyle1Item67
// Type: repetition
// Props: ["dataWId","textDiv"]

const Btnstyle1Item67 = ({ dataWId, textDiv, onClick = () => { } }) => {
  return (
    <a data-w-id={dataWId || "05baf8d8-9541-fe79-48a2-6cb3c1831b04"} href="#" className="btn-style1 w-inline-block" onClick={onClick}>
      <div className="btn-icon"><img src="../images/Search.svg" loading="lazy" alt="" /></div>
      <div>{textDiv || 'Create Knowledge Base'}</div>
    </a>
  );
};

export default Btnstyle1Item67;