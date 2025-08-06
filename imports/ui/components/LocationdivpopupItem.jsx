import React from 'react';
import LocationdivmapItem from './LocationdivmapItem';
import LocationdivtextcontentItem from './LocationdivtextcontentItem';

const LocationdivpopupItem = ({ dataWId, divText }) => {
  return (
    <div
      data-w-id={dataWId || '792124c6-0a43-6117-09ca-054912cce46e'}
      className={'location-div-popup'}
    >
      <LocationdivmapItem />
      <LocationdivtextcontentItem divText={'San Francisco, CA'} />
    </div>
  );
};

export default LocationdivpopupItem;
