import React from 'react';
import SubrowtextItem from './SubrowtextItem';

const CardformrowleftItem = ({ src, divText, description }) => {
  return (
    <div className={'card-form-row-left'}>
      <div className={'smarties-icon-card-row'}>
        <img
          width={'34'}
          height={'34'}
          alt={''}
          src={
            src ||
            'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfc7e46f2135cf7a6b901_smarties-icon-sound.svg'
          }
          loading={'lazy'}
        />
      </div>
      <SubrowtextItem
        divText={'Background Denoising Enabled'}
        description={'Filter background noise while the user is talking.'}
      />
    </div>
  );
};

export default CardformrowleftItem;
