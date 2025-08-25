import React from 'react';

// Component: FormcolItem39
// Type: repetition
// Props: ["textLabel","textDiv","id","name","dataName","placeholder"]

const FormcolItem39 = ({ textLabel, textDiv, id, name, dataName, placeholder}) => {
  return (
    <div className="form-col"><div className="form--cell-div"><div><label htmlFor="" className="form-label-2">{textLabel || 'Voicemail Message'}</label><div className="text-assistant-card-description">{textDiv || 'This is the message that the assistant will say if the call is forwarded to voicemail.'}</div></div><div className="system-prompt-textarea"><div className="form-textararea-div"><textarea id={id || "Voicemail-Message"} name={name || "Voicemail-Message"} maxlength="5000" data-name={dataName || "Voicemail Message"} placeholder={placeholder || "Hi, you've reached Leo at SmartHome Innovations. Sorry I missed your call. Please leave a message, and I'll get back to you as soon as possible."} className="form-input-textarea w-input"></textarea></div></div></div></div>
  );
};

export default FormcolItem39;