import React from 'react';
import ToolsearchItem from './ToolsearchItem';

const ReusableItem40 = ({ dataWId, name, dataName, id }) => {
  return (
    <div>
      <div
        data-w-id={dataWId || '379fe386-af88-ed7e-3780-62a6bbc10af6'}
        className="tool-search-input"
      >
        <input
          className="form-input search w-input"
          maxlength="256"
          name={name || 'Assistant-Tools'}
          data-name={dataName || 'Assistant Tools'}
          placeholder=""
          type="text"
          id={id || 'Assistant-Tools'}
          required
        />
      </div>
      <ToolsearchItem />
    </div>
  );
};

export default ReusableItem40;
