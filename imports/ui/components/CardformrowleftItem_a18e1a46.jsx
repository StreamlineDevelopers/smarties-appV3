import React from 'react';
import Divblock12Item from './Divblock12Item';

const CardformrowleftItem_a18e1a46 = ({ src, divText, description }) => {
  return (
    <div className={'card-form-row-left'}>
      <div className={'smarties-icon-card-row'}>
        <img
          width={'34'}
          height={'34'}
          alt={''}
          src={
            src ||
            'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa183374063fd8ed3e14_smarties-icon-timeout.svg'
          }
          loading={'lazy'}
        />
      </div>
      <Divblock12Item
        divText={'Timeout'}
        description={
          "The number of seconds to wait before processing the user's keypad input. Set to 0 to only wait for a delimiter."
        }
      />
    </div>
  );
};

export default CardformrowleftItem_a18e1a46;
