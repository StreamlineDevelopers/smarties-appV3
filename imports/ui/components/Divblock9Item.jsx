import React from 'react';
import WcheckboxItem from './WcheckboxItem';
import WcheckboxItem22 from './WcheckboxItem22';

const Divblock9Item = ({ props }) => {
  return (
    <div className="div-block-9">
      <div className="div-block-7">
        <WcheckboxItem
          name="checkbox-2"
          id="checkbox-2"
          dataName="Checkbox 2"
          htmlFor="checkbox-2"
          label="(Select All)"
        />
      </div>
      <div className="div-block-7">
        <WcheckboxItem22 />
      </div>
    </div>
  );
};

export default Divblock9Item;
