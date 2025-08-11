import React from 'react';
import CardformrowleftItem_a18e1a46 from './CardformrowleftItem_a18e1a46';
import RowsliderItem_08dbdffe from './RowsliderItem_08dbdffe';

const CardformrowItem_e7dd8d93 = ({ src, divText, description }) => {
  return (
    <div className={'card-form-row'}>
      <CardformrowleftItem_a18e1a46
        src={
          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa183374063fd8ed3e14_smarties-icon-timeout.svg'
        }
        divText={'Timeout'}
        description={
          "The number of seconds to wait before processing the user's keypad input. Set to 0 to only wait for a delimiter."
        }
      />
      <RowsliderItem_08dbdffe />
    </div>
  );
};

export default CardformrowItem_e7dd8d93;
