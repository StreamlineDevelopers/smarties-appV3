import React from 'react';
import SelectfieldItem338 from './SelectfieldItem338';

const FormcontrolItem339 = ({ id, name, dataName }) => {
  return (
    <div className={'form-control'}>
      <div className={'form-label'}>Assistant Description</div>
      <div className={'settings-row-formdata'}>
        <SelectfieldItem338
          id={'inbound-assistant-description'}
          name={'inbound-assistant-description'}
          dataName={'inbound assistant description'}
        />
      </div>
    </div>
  );
};

export default FormcontrolItem339;
