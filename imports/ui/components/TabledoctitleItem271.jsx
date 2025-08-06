import React from 'react';

const TabledoctitleItem271 = ({ title }) => {
  return (
    <div className={'table-doctitle'}>
      <div className={'table-fileicon'}>
        <img
          src={'../images/smarties-file-dark.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div className={'table-doctitle-text'}>{title || 'Knowledge Base 1'}</div>
    </div>
  );
};

export default TabledoctitleItem271;
