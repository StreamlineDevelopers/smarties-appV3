import React from 'react';
import ProgressItem from './ProgressItem';

const SliderItem = ({}) => {
  return (
    <div className={'slider'}>
      <img
        width={'240'}
        height={'6'}
        alt={''}
        src={
          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cc846b7e69ae040175cbd_Background.svg'
        }
        loading={'lazy'}
        className={'background'}
      />
      <ProgressItem />
    </div>
  );
};

export default SliderItem;
