import React from 'react';

// Component: FormhddivleftItem
// Type: repetition
// Props: ["textDiv"]

const FormhddivleftItem = ({ textDiv}) => {
  return (
    <div className="form-hd-div-left"><div className="table-date-hd-text">{textDiv || 'Parameters'}</div></div>
  );
};

export default FormhddivleftItem;