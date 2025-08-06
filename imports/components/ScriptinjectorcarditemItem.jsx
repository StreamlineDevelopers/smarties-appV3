import React from 'react';
import ScriptinjectorcarditemtopItem from './ScriptinjectorcarditemtopItem';
import ScriptinjectorcarditembotItem from './ScriptinjectorcarditembotItem';

const ScriptinjectorcarditemItem = ({ dataWId, title, description }) => {
  return (
    <div className="scriptinjector-card-item">
      <ScriptinjectorcarditemtopItem
        dataWId={dataWId || 'd76ae3fe-514d-db09-b76d-ac292998104d'}
        title={title || 'Subscription Troubleshooting'}
        description={
          description ||
          'Guide the customer through subscription issues and billing problems'
        }
      />
      <ScriptinjectorcarditembotItem />
    </div>
  );
};

export default ScriptinjectorcarditemItem;
