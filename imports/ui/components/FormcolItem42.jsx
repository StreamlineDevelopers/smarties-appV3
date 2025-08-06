import React from 'react';
import FormcelldivItem41 from './FormcelldivItem41';

const FormcolItem42 = ({ label, description, dataWId }) => {
  return (
    <div className="form-col">
      <FormcelldivItem41
        label={label || 'Client Messages'}
        description={
          description ||
          'These are the messages that will be sent to the Client SDKs.'
        }
        dataWId={dataWId || '379fe386-af88-ed7e-3780-62a6bbc10df3'}
      />
    </div>
  );
};

export default FormcolItem42;
