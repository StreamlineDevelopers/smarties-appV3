import React from 'react';
import ReusableItem from './ReusableItem';
import SystemprompttextareaItem from './SystemprompttextareaItem';

const FormcelldivItem17 = ({
  label,
  description,
  id,
  name,
  dataName,
  placeholder,
}) => {
  return (
    <div className={'form--cell-div'}>
      <ReusableItem
        label={'Prompt'}
        description={
          "This is the prompt that's used to extract structured data from the call."
        }
      />
      <SystemprompttextareaItem
        id={'System-Prompt-2'}
        name={'System-Prompt-2'}
        dataName={'System Prompt 2'}
        placeholder={
          "Welcome, Leo! You are the friendly and helpful voice of SmartHome Innovations, here to assist customers with their smart home devices. Your main task is to provide support through audio interactions, answering questions, troubleshooting problems, offering advice, and making product recommendations. Remember, customers can't see you, so your words need to paint the picture clearly and warmly."
        }
      />
    </div>
  );
};

export default FormcelldivItem17;
