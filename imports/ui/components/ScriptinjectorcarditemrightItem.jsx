import React from 'react';

const ScriptinjectorcarditemrightItem = ({ selectInjectionScript }) => {
  return (
    <div className={'scriptinjector-card-item-right'}>
      <a href={'#'} className={'btn-small w-button'} onClick={selectInjectionScript}>
        Use This
      </a>
      <div className={'script-lastupdated'}>Last Updated: 2:15 PM</div>
    </div>
  );
};

export default ScriptinjectorcarditemrightItem;
