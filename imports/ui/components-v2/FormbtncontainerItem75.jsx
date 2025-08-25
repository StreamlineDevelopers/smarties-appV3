import React from 'react';

// Component: FormbtncontainerItem75
// Type: repetition
// Props: ["textDiv"]

const FormbtncontainerItem75 = ({ textDiv, onSubmit = () => { }, onCancel = () => { } }) => {
  return (
    <div className="form-btn-container">
      <a href="#" className="btn-style1 outline" onClick={onCancel}>
        <div>Cancel</div>
      </a>
      <a href="#" className="btn-style1" onClick={onSubmit}>
        <div>{textDiv || 'Add'}</div>
      </a>
    </div>
  );
};

export default FormbtncontainerItem75;