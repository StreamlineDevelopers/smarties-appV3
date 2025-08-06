import React from 'react';
import PropertyitemItem from './PropertyitemItem';

const PropertylistItem = ({ dataWId }) => {
  return (
    <div className="property-list">
      <PropertyitemItem
        dataWId={dataWId || '1849b75f-9350-98c1-3481-367f0109f9ac'}
      />
    </div>
  );
};

export default PropertylistItem;
