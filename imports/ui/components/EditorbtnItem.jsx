import React from 'react';

const EditorbtnItem = ({ src, width }) => {
  return (
    <a href={'#'} target={'_blank'} className={'editor-btn'}>
      <div className={'editor-icon-div'}>
        <img
          src={src || '../images/Frame_7.svg'}
          loading={'lazy'}
          width={width || '14'}
          height={'16'}
          alt={''}
          className={'editor-icon-image'}
        />
      </div>
    </a>
  );
};

export default EditorbtnItem;
