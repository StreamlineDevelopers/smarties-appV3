import React from 'react';
import CardformrowleftItem from './CardformrowleftItem';
import SwitchdivItem from './SwitchdivItem';

const CardformrowItem = ({ src, divText, description }) => {
  return (
    <div className={'card-form-row'}>
      <CardformrowleftItem
        src={
          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfc7e46f2135cf7a6b901_smarties-icon-sound.svg'
        }
        divText={'Background Denoising Enabled'}
        description={'Filter background noise while the user is talking.'}
      />
      <SwitchdivItem />
    </div>
  );
};

export default CardformrowItem;
