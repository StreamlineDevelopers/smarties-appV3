import React from 'react';
import FormrowItem_ca5d0667 from './FormrowItem_ca5d0667';
import FormbtncontainerItem_874ab7a9 from './FormbtncontainerItem_874ab7a9';

const DomaindivItem = ({ id, dataWId, dataWId1 }) => {
  return (
    <div className={'domain-div'}>
      <FormrowItem_ca5d0667
        label={'Domain'}
        name={'domain-name'}
        dataName={'domain name'}
        type={'url'}
        id={'domain-name-2'}
      />
      <FormbtncontainerItem_874ab7a9
        dataWId={'5cefa7b3-c9ea-0bf4-45d3-c9b1b57787ca'}
        dataWId1={'5cefa7b3-c9ea-0bf4-45d3-c9b1b57787cd'}
      />
    </div>
  );
};

export default DomaindivItem;
