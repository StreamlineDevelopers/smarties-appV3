import React from 'react';
import CardformrowleftItem14 from './CardformrowleftItem14';
import SwitchdivItem from './SwitchdivItem';

const CardformrowItem21 = ({ src, divText, description }) => {
  return (
    <div className={'card-form-row'}>
      <CardformrowleftItem14
        src={
          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18f667ce45112f5bf4_smarties-icon-card.svg'
        }
        divText={'PCI Compliance'}
        description={
          'When enabled, only PCI-compliant providers can be selected.'
        }
      />
      <SwitchdivItem />
    </div>
  );
};

export default CardformrowItem21;
