import React from 'react';
import FormcelldivItem23 from './FormcelldivItem23';

const FormcolItem25 = ({
  label,
  description,
  id,
  name,
  dataName,
  placeholder,
}) => {
  return (
    <div className="form-col">
      <FormcelldivItem23
        label={label || 'Voicemail Message'}
        description={
          description ||
          'This is the message that the assistant will say if the call is forwarded to voicemail.'
        }
        id={id || 'Voicemail-Message'}
        name={name || 'Voicemail-Message'}
        dataName={dataName || 'Voicemail Message'}
        placeholder={
          placeholder ||
          "Hi, you've reached Leo at SmartHome Innovations. Sorry I missed your call. Please leave a message, and I'll get back to you as soon as possible."
        }
      />
    </div>
  );
};

export default FormcolItem25;
