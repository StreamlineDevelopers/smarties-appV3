import React from 'react';
import FormcolItem19 from './FormcolItem19';

const Formrow2Item22 = ({
  label,
  description,
  id,
  name,
  dataName,
  placeholder,
}) => {
  return (
    <div className={'form-row-2 flex'}>
      <FormcolItem19
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

export default Formrow2Item22;
