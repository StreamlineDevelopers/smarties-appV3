import React from 'react';
import CardformrowleftItem20 from './CardformrowleftItem20';
import RowsliderItem34 from './RowsliderItem34';

const CardformrowItem38 = ({ divText, description, src }) => {
  return (
    <div className="card-form-row">
      <CardformrowleftItem20
        src={
          src ||
          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg'
        }
        divText={divText || 'Wait seconds'}
        description={
          description || 'This is how long assistant waits before speaking.'
        }
      />
      <RowsliderItem34 />
    </div>
  );
};

export default CardformrowItem38;
