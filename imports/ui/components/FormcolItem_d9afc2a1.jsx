import React from 'react';
import FormcelldivItem_12d150b1 from './FormcelldivItem_12d150b1';

const FormcolItem_d9afc2a1 = ({
  label,
  description,
  id,
  name,
  dataName,
  placeholder,
}) => {
  return (
    <div className={'form-col'}>
      <FormcelldivItem_12d150b1
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

export default FormcolItem_d9afc2a1;
