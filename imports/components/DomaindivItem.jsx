import React from 'react';
import FormrowItem466 from './FormrowItem466';
import FormbtncontainerItem467 from './FormbtncontainerItem467';

const DomaindivItem = ({ id, dataWId, dataWId1 }) => {
  return (
    <div className="domain-div">
      <FormrowItem466
        label="Domain"
        name="domain-name"
        dataName="domain name"
        type="url"
        id={id || 'domain-name-2'}
      />
      <FormbtncontainerItem467
        dataWId={dataWId || '5cefa7b3-c9ea-0bf4-45d3-c9b1b57787ca'}
        dataWId1={dataWId1 || '5cefa7b3-c9ea-0bf4-45d3-c9b1b57787cd'}
      />
    </div>
  );
};

export default DomaindivItem;
