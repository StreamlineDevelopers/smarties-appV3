import React from 'react';
import ScriptinjectortextItem from './ScriptinjectortextItem';

const ScriptinjectorcarditemscriptItem = ({}) => {
  return (
    <div className={'scriptinjector-card-item-script'}>
      <ScriptinjectortextItem />
      <div className={'scriptinjector-copy'}>
        <img loading={'lazy'} src={'images/smarties-icon-copy.svg'} alt={''} />
      </div>
    </div>
  );
};

export default ScriptinjectorcarditemscriptItem;
