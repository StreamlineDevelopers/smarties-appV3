import React from 'react';

const ReusableItem_e0d43068 = ({ divText, description }) => {
  return (
    <div>
      <div className={'card-form-row-text'}>{divText || 'PCI Compliance'}</div>
      <div className={'card-form-row-description'}>
        {description ||
          'When enabled, only PCI-compliant providers can be selected.'}
      </div>
    </div>
  );
};

export default ReusableItem_e0d43068;
