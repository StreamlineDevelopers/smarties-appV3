import React from 'react';
import WcheckboxItem438 from './WcheckboxItem438';

const FormrowItem445 = ({
  name,
  id,
  dataName,
  htmlFor,
  name1,
  id1,
  dataName1,
  htmlFor1,
}) => {
  return (
    <div className="form-row horizontal align-left">
      <WcheckboxItem438
        name={name || 'check-async-2'}
        id={id || 'check-async-2'}
        dataName={dataName || 'Check Async 2'}
        htmlFor={htmlFor || 'check-async-2'}
        label="Async"
      />
      <WcheckboxItem438
        name={name1 || 'check-strict-2'}
        id={id1 || 'check-strict-2'}
        dataName={dataName1 || 'Check Strict 2'}
        htmlFor={htmlFor1 || 'check-strict-2'}
        label="Strict"
      />
    </div>
  );
};

export default FormrowItem445;
