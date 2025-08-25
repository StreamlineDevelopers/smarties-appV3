import React from 'react';

// Component: FormrowItem112
// Type: repetition
// Props: ["htmlFor","id","name","dataName"]

const FormrowItem112 = ({ htmlFor, id, name, dataName}) => {
  return (
    <div className="form-row horizontal g-15"><div className="form-control"><label htmlFor={htmlFor || "message-type-2"} className="form-label">Add Message</label><select id={id || "message-type-2"} name={name || "message-type-2"} data-name={dataName || "Message Type 2"} className="select-field w-select"><option value="">Select Message Type</option><option value="number">number</option><option value="boolean">boolean</option><option value="object">object</option><option value="array">array</option></select></div></div>
  );
};

export default FormrowItem112;