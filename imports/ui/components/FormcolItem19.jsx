import React from 'react';
import FormcelldivItem17 from './FormcelldivItem17';

const FormcolItem19 = ({
  label,
  description,
  id,
  name,
  dataName,
  placeholder,
}) => {
  return (
    <div className={'form-col'}>
      <FormcelldivItem17
        label={'Voicemail Message'}
        description={
          'This is the message that the assistant will say if the call is forwarded to voicemail.'
        }
        id={'Voicemail-Message'}
        name={'Voicemail-Message'}
        dataName={'Voicemail Message'}
        placeholder={
          "Hi, you've reached Leo at SmartHome Innovations. Sorry I missed your call. Please leave a message, and I'll get back to you as soon as possible."
        }
      />
    </div>
  );
};

export default FormcolItem19;
