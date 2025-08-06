import React from 'react';
import FormcelldivItem23 from './FormcelldivItem23';

const Formrow2Item24 = ({ props }) => {
  return (
    <div className="form-row-2 prompt">
      <FormcelldivItem23
        label="Prompt"
        description="This is the prompt that's used to extract structured data from the call."
        id="System-Prompt-2"
        name="System-Prompt-2"
        dataName="System Prompt 2"
        placeholder="Welcome, Leo! You are the friendly and helpful voice of SmartHome Innovations, here to assist customers with their smart home devices. Your main task is to provide support through audio interactions, answering questions, troubleshooting problems, offering advice, and making product recommendations. Remember, customers can't see you, so your words need to paint the picture clearly and warmly."
      />
    </div>
  );
};

export default Formrow2Item24;
