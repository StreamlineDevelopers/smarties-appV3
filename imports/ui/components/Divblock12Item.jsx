import React from 'react';

const Divblock12Item = ({ divText, description }) => {
  return (
    <div className={'div-block-12'}>
      <div className={'card-form-row-text'}>{divText || 'Timeout'}</div>
      <div className={'card-form-row-description'}>
        {description ||
          "The number of seconds to wait before processing the user's keypad input. Set to 0 to only wait for a delimiter."}
      </div>
    </div>
  );
};

export default Divblock12Item;
