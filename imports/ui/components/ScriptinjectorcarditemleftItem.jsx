import React from 'react';
import ScriptinjectorcarditemtextcontentItem from './ScriptinjectorcarditemtextcontentItem';

const ScriptinjectorcarditemleftItem = ({ title, description }) => {
  return (
    <div className={'scriptinjector-card-item-left'}>
      <div className={'scriptinjector-card-accordion'}>
        <img
          loading={'lazy'}
          src={
            'https://cdn.prod.website-files.com/6863b2cd9d992eee2240d5c5/6863b2cd9d992eee2240d603_vuesax%2Foutline%2Farrow-down.svg'
          }
          alt={''}
        />
      </div>
      <div className={'scriptinjector-card-item-icon'}>
        <img
          loading={'lazy'}
          src={'images/smarties-script-icon.svg'}
          alt={''}
        />
      </div>
      <ScriptinjectorcarditemtextcontentItem
        title={'Subscription Troubleshooting'}
        description={
          'Guide the customer through subscription issues and billing problems'
        }
      />
    </div>
  );
};

export default ScriptinjectorcarditemleftItem;
