import React from 'react';
import ReusableItem12 from './ReusableItem12';

const CardformrowleftItem20 = ({ src, divText, description }) => {
  return (
    <div className="card-form-row-left">
      <div className="smarties-icon-card-row">
        <img
          width="34"
          height="34"
          alt=""
          src={
            src ||
            'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18f667ce45112f5bf4_smarties-icon-card.svg'
          }
          loading="lazy"
        />
      </div>
      <ReusableItem12
        divText={divText || 'PCI Compliance'}
        description={
          description ||
          'When enabled, only PCI-compliant providers can be selected.'
        }
      />
    </div>
  );
};

export default CardformrowleftItem20;
