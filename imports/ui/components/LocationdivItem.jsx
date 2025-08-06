import React from 'react';
import LocationdivpopupItem from './LocationdivpopupItem';

const LocationdivItem = ({ dataWId, dataWId1, divText, divText1 }) => {
  return (
    <div
      data-w-id={dataWId || 'd5d24fc8-f7d9-5f76-d442-ba200f41339b'}
      className="location-div"
    >
      <div className="icon-location">
        <img
          src="images/smarties-tableicon-location.svg"
          loading="lazy"
          alt=""
        />
      </div>
      <div>{divText || 'Se, CA'}</div>
      <LocationdivpopupItem
        dataWId={dataWId1 || '792124c6-0a43-6117-09ca-054912cce46e'}
        divText={divText1 || 'San Francisco, CA'}
      />
    </div>
  );
};

export default LocationdivItem;
