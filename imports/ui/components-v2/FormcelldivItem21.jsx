import React from 'react';

// Component: FormcelldivItem21
// Type: repetition
// Props: ["textLabel","textDiv","id","name","dataName","placeholder"]

const FormcelldivItem21 = ({ textLabel, textDiv, id, name, dataName, placeholder}) => {
  return (
    <div className="form--cell-div"><div><label htmlFor="" className="form-label-2">{textLabel || 'Prompt'}</label><div className="text-assistant-card-description">{textDiv || 'This is the prompt that\'s used to extract structured data from the call.'}</div></div><div className="system-prompt-textarea"><div className="form-textararea-div"><textarea id={id || "System-Prompt-2"} name={name || "System-Prompt-2"} maxlength="5000" data-name={dataName || "System Prompt 2"} placeholder={placeholder || "Welcome, Leo! You are the friendly and helpful voice of SmartHome Innovations, here to assist customers with their smart home devices. Your main task is to provide support through audio interactions, answering questions, troubleshooting problems, offering advice, and making product recommendations. Remember, customers can't see you, so your words need to paint the picture clearly and warmly."} className="form-input-textarea w-input"></textarea></div></div></div>
  );
};

export default FormcelldivItem21;