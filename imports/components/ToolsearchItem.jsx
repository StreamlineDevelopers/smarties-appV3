import React from 'react';
import Divblock9Item from './Divblock9Item';
import ReusableItem13 from './ReusableItem13';

const ToolsearchItem = ({ props }) => {
  return (
    <div className="tool-search">
      <div className="div-block-8">
        <input
          className="form-input search white w-input"
          maxlength="256"
          name="Assistant-Tools-4"
          data-name="Assistant Tools 4"
          placeholder=""
          type="text"
          id="Assistant-Tools-4"
          required
        />
      </div>
      <Divblock9Item />
      <ReusableItem13 />
    </div>
  );
};

export default ToolsearchItem;
