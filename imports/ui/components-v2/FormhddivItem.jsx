import React from 'react';

// Component: FormhddivItem
// Type: repetition
// Props: ["textDiv"]

const FormhddivItem = ({ textDiv}) => {
  return (
    <div className="form-hd-div"><div className="table-date-hd-text smaller">{textDiv || 'Profile Information'}</div></div>
  );
};

export default FormhddivItem;