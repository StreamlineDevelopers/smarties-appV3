import React from 'react';

const ReusableItem12 = ({ divText, description }) => {
  return (
    <div>
      <div className="card-form-row-text">{divText || 'PCI Compliance'}</div>
      <div className="card-form-row-description">
        {description ||
          'When enabled, only PCI-compliant providers can be selected.'}
      </div>
    </div>
  );
};

export default ReusableItem12;
