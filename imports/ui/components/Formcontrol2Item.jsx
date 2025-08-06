import React from 'react';
import ReusableItem40 from './ReusableItem40';

const Formcontrol2Item = ({ dataWId, name, dataName, id }) => {
  return (
    <div className="form-control-2">
      <ReusableItem40
        dataWId={dataWId || '379fe386-af88-ed7e-3780-62a6bbc10af6'}
        name={name || 'Assistant-Tools'}
        dataName={dataName || 'Assistant Tools'}
        id={id || 'Assistant-Tools'}
      />
    </div>
  );
};

export default Formcontrol2Item;
