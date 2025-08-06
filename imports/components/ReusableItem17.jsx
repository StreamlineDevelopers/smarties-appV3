import React from 'react';
import WcheckboxItem from './WcheckboxItem';

const ReusableItem17 = ({ label }) => {
  return (
    <div>
      <div className="checbox-small">
        <WcheckboxItem
          name="checkbox-3"
          id="checkbox-3"
          dataName="Checkbox 3"
          htmlFor="checkbox-3"
          label={label || '#'}
        />
      </div>
    </div>
  );
};

export default ReusableItem17;
