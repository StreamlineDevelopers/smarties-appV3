import React from 'react';
import ScriptinjectorcarditemleftItem from './ScriptinjectorcarditemleftItem';
import ScriptinjectorcarditemrightItem from './ScriptinjectorcarditemrightItem';

const ScriptinjectorcarditemtopItem = ({ dataWId, title, description }) => {
  return (
    <div
      data-w-id={dataWId || 'd76ae3fe-514d-db09-b76d-ac292998104d'}
      className="scriptinjector-card-item-top"
    >
      <ScriptinjectorcarditemleftItem
        title={title || 'Subscription Troubleshooting'}
        description={
          description ||
          'Guide the customer through subscription issues and billing problems'
        }
      />
      <ScriptinjectorcarditemrightItem />
    </div>
  );
};

export default ScriptinjectorcarditemtopItem;
