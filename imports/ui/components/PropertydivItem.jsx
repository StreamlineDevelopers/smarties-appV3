import React from 'react';
import FormrowItem397 from './FormrowItem397';
import FormrowItem386 from './FormrowItem386';
import WcheckboxItem382 from './WcheckboxItem382';
import FormbtncontainerItem387 from './FormbtncontainerItem387';

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
    <div className={'property-div'}>
      <FormrowItem397
        htmlFor={'parameter-name-2'}
        name={'parameter-name-2'}
        dataName={'Parameter Name 2'}
        id={'parameter-name-2'}
        htmlFor1={'parameter-type-2'}
        id1={'parameter-type-2'}
        name1={'parameter-type-2'}
        dataName1={'Parameter Type 2'}
      />
      <FormrowItem386
        label={'Description'}
        id={'parameter-description-2'}
        name={'parameter-description-2'}
        dataName={'Parameter Description 2'}
      />
      <div className={'form-row horizontal align-left mb-0'}>
        <WcheckboxItem382
          name={'check-parameter-required-2'}
          id={'check-parameter-required-2'}
          dataName={'Check Parameter Required 2'}
          htmlFor={'check-parameter-required-2'}
          label={'Required'}
        />
      </div>
      <FormbtncontainerItem387
        dataWId={'1849b75f-9350-98c1-3481-367f0109f9c5'}
        dataWId1={'1849b75f-9350-98c1-3481-367f0109f9c8'}
      />
    </div>
  );
};

export default PropertydivItem;
