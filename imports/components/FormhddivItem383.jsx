import React from 'react';

const FormhddivItem383 = ({ divText, label }) => {
  return (
    <div className="form-hd-div">
      <div className="table-date-hd-text">{divText || 'Inbound Settings'}</div>
      <div className="settings-sublabel">
        {label ||
          'You can assign an assistant to the phone number so that whenever someone calls this phone number, the assistant will automatically be assigned to the call.'}
      </div>
    </div>
  );
};

export default FormhddivItem383;
