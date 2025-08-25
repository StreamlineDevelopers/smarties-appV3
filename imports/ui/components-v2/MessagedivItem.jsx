import React from 'react';

const MESSAGE_TYPES = [
  'Request Start',
  'Request Complete',
  'Request Failed',
  'Request Response Delayed'
];
// Component: MessagedivItem
// Type: repetition
// Props: ["htmlFor","id","name","dataName","dataWId"]

const MessagedivItem = ({ htmlFor, id, name, dataName, dataWId, messages, onChange, isAddMessageOpen, onClose, selectedMessageType = "" }) => {
  return (
    <div style={{ display: isAddMessageOpen ? "block" : "none" }} className="message-div">
      <div className="form-row horizontal g-15"><div className="form-control" ><label htmlFor={htmlFor || "message-type-2"} className="form-label">Add Message</label>
        <select value={selectedMessageType} onChange={(e) => setSelectedMessageType(e.target.value)} id={id || "message-type-2"} name={name || "message-type-2"} data-name={dataName || "Message Type 2"} className="select-field w-select">
          <option value="" disabled>Select Message Type</option><option value="number">number</option>
          {MESSAGE_TYPES
            .filter(type => !messages.some(m => m.type === type))
            .map((type) => (<option key={type} value={type}>{type}</option>))}
        </select>
      </div>
      </div><div className="form-btn-container" onClick={onClose}><a href="#" data-w-id={dataWId || "1849b75f-9350-98c1-3481-367f0109fa08"} className="btn-style1 outline"><div>Cancel</div></a><a href="#" className="btn-style1"><div>Apply</div></a></div></div>
  );
};

export default MessagedivItem;