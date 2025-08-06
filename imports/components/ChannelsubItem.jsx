import React from 'react';
import WcheckboxItem326 from './WcheckboxItem326';
import WcheckboxItem333 from './WcheckboxItem333';

const ChannelsubItem = ({ props }) => {
  return (
    <div className="channel-sub">
      <div className="filter-group_row">
        <WcheckboxItem326
          name="checkbox-8"
          id="checkbox-8"
          dataName="Checkbox 8"
          htmlFor="checkbox-8"
          label="SMS"
        />
      </div>
      <div className="filter-group_row">
        <WcheckboxItem326
          name="checkbox-9"
          id="checkbox-9"
          dataName="Checkbox 9"
          htmlFor="checkbox-9"
          label="Chat"
        />
      </div>
      <div className="filter-group_row">
        <WcheckboxItem333 />
      </div>
    </div>
  );
};

export default ChannelsubItem;
