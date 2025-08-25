import React from 'react';
import FormcontrolItem_a0eb59b2 from './FormcontrolItem_a0eb59b2';

const FormrowItem_ca5d0667 = ({ label, name, dataName, type, id, domain, index, handleDomainChange = () => { }, onBlur = () => { } }) => {
  return (
    <div className={'form-row'}>
      <FormcontrolItem_a0eb59b2
        label={'Domain'}
        name={'domain-name'}
        dataName={'domain name'}
        type={'url'}
        id={'domain-name-2'}
        domain={domain}
        index={index}
        handleDomainChange={handleDomainChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default FormrowItem_ca5d0667;
