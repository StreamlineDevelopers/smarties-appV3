import React from 'react';
import ReusableItem_e0d43068 from './ReusableItem_e0d43068';

const CardformrowleftItem_00e6b879 = ({ src, divText, description }) => {
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
      <ReusableItem_e0d43068
        divText={'PCI Compliance'}
        description={
          'When enabled, only PCI-compliant providers can be selected.'
        }
      />
    </div>
  );
};

export default CardformrowleftItem_00e6b879;
