import React from 'react';
import CardformrowleftItem15 from './CardformrowleftItem15';
import RowsliderItem28 from './RowsliderItem28';

const CardformrowItem33 = ({ src, divText, description }) => {
  return (
    <div className={'card-form-row'}>
      <CardformrowleftItem15
        src={
          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa183374063fd8ed3e14_smarties-icon-timeout.svg'
        }
        divText={'Timeout'}
        description={
          "The number of seconds to wait before processing the user's keypad input. Set to 0 to only wait for a delimiter."
        }
      />
      <RowsliderItem28 />
    </div>
  );
};

export default CardformrowItem33;
