import React from 'react';
import CardformrowleftItem21 from './CardformrowleftItem21';
import RowsliderItem34 from './RowsliderItem34';

const CardformrowItem39 = ({ src, divText, description }) => {
  return (
    <div className="card-form-row">
      <CardformrowleftItem21
        src={
          src ||
          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa183374063fd8ed3e14_smarties-icon-timeout.svg'
        }
        divText={divText || 'Timeout'}
        description={
          description ||
          "The number of seconds to wait before processing the user's keypad input. Set to 0 to only wait for a delimiter."
        }
      />
      <RowsliderItem34 />
    </div>
  );
};

export default CardformrowItem39;
