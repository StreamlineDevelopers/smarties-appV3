import React from 'react';
import CardformrowleftItem14 from './CardformrowleftItem14';
import RowsliderItem28 from './RowsliderItem28';

const CardformrowItem32 = ({ divText, description, src }) => {
  return (
    <div className={'card-form-row'}>
      <CardformrowleftItem14
        src={
          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg'
        }
        divText={'Wait seconds'}
        description={'This is how long assistant waits before speaking.'}
      />
      <RowsliderItem28 />
    </div>
  );
};

export default CardformrowItem32;
