import React from 'react';

// Component: SearchformblockItem
// Type: repetition
// Props: []

const SearchformblockItem = ({ value, onChange }) => {
  return (
    <div className="search-formblock w-form"><form id="wf-form-search-form" name="wf-form-search-form" data-name="search form" method="get" data-wf-page-id="682df6ec85bdddfa18192abf" data-wf-element-id="9aaf37b2-a011-864e-493e-ccb9979ed0bd"><div className="form-body"><div className="form-row mb-0"><input className="inbox-search w-input" maxlength="256" name="search-2" data-name="Search 2" placeholder="Search" value={value} onChange={onChange} type="text" id="search-2" required /></div></div></form><div className="w-form-done"><div>Thank you! Your submission has been received!</div></div><div className="w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div></div>
  );
};

export default SearchformblockItem;