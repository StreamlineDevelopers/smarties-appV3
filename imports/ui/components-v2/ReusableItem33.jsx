import React from 'react';

// Component: ReusableItem33
// Type: repetition
// Props: ["textSpan"]

const ReusableItem33 = ({ textSpan}) => {
  return (
    <div><div className="checbox-small"><label className="w-checkbox checkbox-field-2"><div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div><input type="checkbox" name="checkbox-3" id="checkbox-3" data-name="Checkbox 3" style={{"opacity":"0","position":"absolute","zIndex":"-1"}} /><span className="checkbox-label w-form-label" htmlFor="checkbox-3">{textSpan || '#'}</span></label></div></div>
  );
};

export default ReusableItem33;