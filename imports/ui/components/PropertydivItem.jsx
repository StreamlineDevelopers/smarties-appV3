import React from 'react';
import FormrowItem_e438ab9e from './FormrowItem_e438ab9e';
import FormrowItem_e7b693eb from './FormrowItem_e7b693eb';
import WcheckboxItem_75945490 from './WcheckboxItem_75945490';
import FormbtncontainerItem_71346157 from './FormbtncontainerItem_71346157';

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
      <FormrowItem_e438ab9e
        htmlFor={'parameter-name-2'}
        name={'parameter-name-2'}
        dataName={'Parameter Name 2'}
        id={'parameter-name-2'}
        htmlFor1={'parameter-type-2'}
        id1={'parameter-type-2'}
        name1={'parameter-type-2'}
        dataName1={'Parameter Type 2'}
      />
      <FormrowItem_e7b693eb
        label={'Description'}
        id={'parameter-description-2'}
        name={'parameter-description-2'}
        dataName={'Parameter Description 2'}
      />
      <div className={'form-row horizontal align-left mb-0'}>
        <WcheckboxItem_75945490
          name={'check-parameter-required-2'}
          id={'check-parameter-required-2'}
          dataName={'Check Parameter Required 2'}
          htmlFor={'check-parameter-required-2'}
          label={'Required'}
        />
      </div>
      <FormbtncontainerItem_71346157
        dataWId={'1849b75f-9350-98c1-3481-367f0109f9c5'}
        dataWId1={'1849b75f-9350-98c1-3481-367f0109f9c8'}
      />
    </div>
  );
};

export default PropertydivItem;
