import React from 'react';
import FormrowItem453 from './FormrowItem453';
import FormrowItem442 from './FormrowItem442';
import WcheckboxItem438 from './WcheckboxItem438';
import FormbtncontainerItem443 from './FormbtncontainerItem443';

const PropertydivItem = ({
  htmlFor,
  name,
  dataName,
  id,
  htmlFor1,
  id1,
  name1,
  dataName1,
  id2,
  name2,
  dataName2,
  name3,
  id3,
  dataName3,
  htmlFor2,
  dataWId,
  dataWId1,
}) => {
  return (
    <div className="property-div">
      <FormrowItem453
        htmlFor={htmlFor || 'parameter-name-2'}
        name={name || 'parameter-name-2'}
        dataName={dataName || 'Parameter Name 2'}
        id={id || 'parameter-name-2'}
        htmlFor1={htmlFor1 || 'parameter-type-2'}
        id1={id1 || 'parameter-type-2'}
        name1={name1 || 'parameter-type-2'}
        dataName1={dataName1 || 'Parameter Type 2'}
      />
      <FormrowItem442
        label="Description"
        id={id2 || 'parameter-description-2'}
        name={name2 || 'parameter-description-2'}
        dataName={dataName2 || 'Parameter Description 2'}
      />
      <div className="form-row horizontal align-left mb-0">
        <WcheckboxItem438
          name={name3 || 'check-parameter-required-2'}
          id={id3 || 'check-parameter-required-2'}
          dataName={dataName3 || 'Check Parameter Required 2'}
          htmlFor={htmlFor2 || 'check-parameter-required-2'}
          label="Required"
        />
      </div>
      <FormbtncontainerItem443
        dataWId={dataWId || '1849b75f-9350-98c1-3481-367f0109f9c5'}
        dataWId1={dataWId1 || '1849b75f-9350-98c1-3481-367f0109f9c8'}
      />
    </div>
  );
};

export default PropertydivItem;
