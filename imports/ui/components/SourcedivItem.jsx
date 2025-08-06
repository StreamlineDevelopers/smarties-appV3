import React from 'react';

const SourcedivItem = ({}) => {
  return (
    <div className={'source-div'}>
      <div className={'source-icon'}>
        <img
          src={'images/smarties-source-icon-linkedin.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div className={'source-icon'}>
        <img
          src={'images/smarties-source-icon-fb.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
    </div>
  );
};

export default SourcedivItem;
