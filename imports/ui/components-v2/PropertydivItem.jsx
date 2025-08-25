import { HandMetal } from 'lucide-react';
import React from 'react';

// Component: PropertydivItem
// Type: repetition
// Props: ["htmlFor","name","dataName","id","htmlFor1","id1","name1","dataName1","id2","name2","dataName2","name3","id3","dataName3","htmlFor2","dataWId","dataWId1"]

const PropertydivItem = ({ htmlFor, name, dataName, id, htmlFor1, id1, name1, dataName1, id2, name2, dataName2, name3, id3, dataName3, htmlFor2, dataWId, dataWId1, isAddPropertyOpen, onClose, index, handleParameterChange = () => { }, selectParameters = () => { }, handleChangeDescription = () => { }, handleChangeRequired = () => { }, onSubmit = () => { }, required, value1, value2, value3 }) => {
  return (
    <div style={{ display: isAddPropertyOpen == index ? "block" : "none" }}


      className="property-div"><div className="form-row horizontal g-15">
        <div className="form-col">
          <div className="form-control">
            <label htmlFor={htmlFor || "parameter-name-2"} className="form-label">Name</label>
            <input
              value={value1}
              onChange={handleParameterChange}
              onBlur={handleParameterChange}
              className="form-input w-input"
              maxlength="256"
              name={name || "parameter-name-2"}
              data-name={dataName || "Parameter Name 2"}
              placeholder=""
              type="text"
              id={id || "parameter-name-2"}
            />
          </div>
        </div>
        <div className="form-col">
          <div className="form-control">
            <label htmlFor={htmlFor1 || "parameter-type-2"} className="form-label">Type</label>
            <select onChange={selectParameters} value={value2} id={id1 || "parameter-type-2"} name={name1 || "parameter-type-2"} data-name={dataName1 || "Parameter Type 2"} className="select-field w-select"><option value="string">string</option><option value="number">number</option><option value="boolean">boolean</option><option value="object">object</option><option value="array">array</option></select></div></div></div><div className="form-row"><div className="form-control"><div className="form-label">Description</div><textarea value={value3} onChange={handleChangeDescription} id={id2 || "parameter-description-2"} name={name2 || "parameter-description-2"} maxlength="5000" data-name={dataName2 || "Parameter Description 2"} placeholder="" className="form-textarea w-input"></textarea></div></div><div className="form-row horizontal align-left mb-0"><label className="w-checkbox checkbox-field-2"><div className={`w-checkbox-input w-checkbox-input--inputType-custom checkbox ${required && "w--redirected-checked"}`}></div><input checked={required} onChange={handleChangeRequired} type="checkbox" name={name3 || "check-parameter-required-2"} id={id3 || "check-parameter-required-2"} data-name={dataName3 || "Check Parameter Required 2"} style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} /><span className="checkbox-label w-form-label" htmlFor={htmlFor2 || "check-parameter-required-2"}>Required</span></label></div><div className="form-btn-container"><a onClick={onClose} data-w-id={dataWId || "1849b75f-9350-98c1-3481-367f0109f9c5"} className="btn-style1 outline">
              <div>Cancel</div>
            </a>
        <a onClick={onSubmit} data-w-id={dataWId1 || "1849b75f-9350-98c1-3481-367f0109f9c8"} className="btn-style1">
          <div>Apply</div>
        </a></div></div>
  );
};

export default PropertydivItem;