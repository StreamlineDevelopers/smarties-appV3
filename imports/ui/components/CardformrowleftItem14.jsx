import React from 'react';
import ReusableItem6 from './ReusableItem6';

const CardformrowleftItem14 = ({ src, divText, description }) => {
  return (
    <div className={'card-form-row-left'}>
      <div className={'smarties-icon-card-row'}>
        <img
          width={'34'}
          height={'34'}
          alt={''}
          src={
            src ||
            'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18f667ce45112f5bf4_smarties-icon-card.svg'
          }
          loading={'lazy'}
        />
      </div>
      <ReusableItem6
        divText={'PCI Compliance'}
        description={
          'When enabled, only PCI-compliant providers can be selected.'
        }
      />
    </div>
  );
};

export default CardformrowleftItem14;
