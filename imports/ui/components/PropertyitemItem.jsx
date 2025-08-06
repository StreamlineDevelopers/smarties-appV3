import React from 'react';
import PropertyitemleftItem from './PropertyitemleftItem';
import PropertyitemrightItem440 from './PropertyitemrightItem440';

const PropertyitemItem = ({ dataWId }) => {
  return (
    <div className="property-item">
      <PropertyitemleftItem />
      <PropertyitemrightItem440
        dataWId={dataWId || '1849b75f-9350-98c1-3481-367f0109f9ac'}
      />
    </div>
  );
};

export default PropertyitemItem;
