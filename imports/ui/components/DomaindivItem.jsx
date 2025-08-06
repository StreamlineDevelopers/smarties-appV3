import React from 'react';
import FormrowItem410 from './FormrowItem410';
import FormbtncontainerItem411 from './FormbtncontainerItem411';

const DomaindivItem = ({ id, dataWId, dataWId1 }) => {
  return (
    <div className={'domain-div'}>
      <FormrowItem410
        label={'Domain'}
        name={'domain-name'}
        dataName={'domain name'}
        type={'url'}
        id={'domain-name-2'}
      />
      <FormbtncontainerItem411
        dataWId={'5cefa7b3-c9ea-0bf4-45d3-c9b1b57787ca'}
        dataWId1={'5cefa7b3-c9ea-0bf4-45d3-c9b1b57787cd'}
      />
    </div>
  );
};

export default DomaindivItem;
