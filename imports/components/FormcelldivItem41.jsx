import React from 'react';
import ReusableItem9 from './ReusableItem9';
import Formcontrol2Item from './Formcontrol2Item';

const FormcelldivItem41 = ({ label, description, dataWId }) => {
  return (
    <div className="form--cell-div">
      <ReusableItem9
        label={label || 'Client Messages'}
        description={
          description ||
          'These are the messages that will be sent to the Client SDKs.'
        }
      />
      <Formcontrol2Item
        dataWId={dataWId || '379fe386-af88-ed7e-3780-62a6bbc10df3'}
        name="Assistant-Tools-5"
        dataName="Assistant Tools 5"
        id="Assistant-Tools-5"
      />
    </div>
  );
};

export default FormcelldivItem41;
