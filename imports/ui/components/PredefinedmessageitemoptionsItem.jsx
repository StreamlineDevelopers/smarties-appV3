import React from 'react';

const PredefinedmessageitemoptionsItem = ({ dataWId }) => {
  return (
    <div className={'predefinedmessage-item-options'}>
      <div
        data-w-id={dataWId || 'a8fd72d0-20c2-081c-fda7-5e6e895e1552'}
        className={'contact-table-option'}
      >
        <img
          loading={'lazy'}
          src={'images/smarties-quickrep-icon-01.svg'}
          alt={''}
        />
      </div>
      <div className={'contact-table-option'}>
        <img
          loading={'lazy'}
          src={'images/smarties-quickrep-icon-05.svg'}
          alt={''}
        />
      </div>
    </div>
  );
};

export default PredefinedmessageitemoptionsItem;
