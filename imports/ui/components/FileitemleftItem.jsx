import React from 'react';

const FileitemleftItem = ({}) => {
  return (
    <div className={'file-item-left'}>
      <div className={'table-fileicon'}>
        <img
          src={'../images/smarties-file-dark.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div className={'table-doctitle-text'}>{'sample.txt'}</div>
    </div>
  );
};

export default FileitemleftItem;
