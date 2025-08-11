import React from 'react';
import SystemprompttextareaItem from './SystemprompttextareaItem';

const FormcelldivItem_c04174f7 = ({ id, name, dataName }) => {
  return (
    <div className={'form--cell-div'}>
      <label htmlFor={''} className={'form-label-2'}>
        System Prompt
      </label>
      <SystemprompttextareaItem
        id={'System-Prompt'}
        name={'System-Prompt'}
        dataName={'System Prompt'}
        placeholder={
          "Welcome, Leo! You are the friendly and helpful voice of SmartHome Innovations, here to assist customers with their smart home devices. Your main task is to provide support through audio interactions, answering questions, troubleshooting problems, offering advice, and making product recommendations. Remember, customers can't see you, so your words need to paint the picture clearly and warmly."
        }
      />
    </div>
  );
};

export default FormcelldivItem_c04174f7;
