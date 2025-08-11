import React from 'react';
import CardformrowleftItem_00e6b879 from './CardformrowleftItem_00e6b879';
import RowsliderItem_08dbdffe from './RowsliderItem_08dbdffe';

const CardformrowItem_8019442b = ({ divText, description, src }) => {
  return (
    <div className={'card-form-row'}>
      <CardformrowleftItem_00e6b879
        src={
          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg'
        }
        divText={'Wait seconds'}
        description={'This is how long assistant waits before speaking.'}
      />
      <RowsliderItem_08dbdffe />
    </div>
  );
};

export default CardformrowItem_8019442b;
