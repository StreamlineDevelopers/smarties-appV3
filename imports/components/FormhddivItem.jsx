import React from 'react';

const FormhddivItem = ({ divText }) => {
  return (
    <div className="form-hd-div">
      <div className="table-date-hd-text smaller">
        {divText || 'Profile Information'}
      </div>
    </div>
  );
};

export default FormhddivItem;
