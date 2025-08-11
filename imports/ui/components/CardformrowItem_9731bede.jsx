import React from 'react';
import CardformrowleftItem_00e6b879 from './CardformrowleftItem_00e6b879';
import SwitchdivItem from './SwitchdivItem';

const CardformrowItem_9731bede = ({ src, divText, description }) => {
  return (
    <div className={'card-form-row'}>
      <CardformrowleftItem_00e6b879
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

export default CardformrowItem_9731bede;
