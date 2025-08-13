import React from 'react';
import SelectfieldItem_c76e0f7c from './SelectfieldItem_c76e0f7c';

const FormcontrolItem_21ea33fa = ({ id, name, dataName }) => {
  return (
    <div className={'form-control'}>
      <div className={'form-label'}>{'Assistant Description'}</div>
      <div className={'settings-row-formdata'}>
        <SelectfieldItem_c76e0f7c
          id={'inbound-assistant-description'}
          name={'inbound-assistant-description'}
          dataName={'inbound assistant description'}
        />
      </div>
    </div>
  );
};

export default FormcontrolItem_21ea33fa;
