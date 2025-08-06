import React from 'react';
import FormcolItem42 from './FormcolItem42';

const Formrow2Item43 = ({ label, description, dataWId }) => {
  return (
    <div className="form-row-2 flex">
      <FormcolItem42
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

export default Formrow2Item43;
