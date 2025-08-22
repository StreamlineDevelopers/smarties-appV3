import React, { useRef } from 'react';
import MessagingWatcher from '../../api/client/watchers/MessagingWatcher';
import { useWatcher } from '../../api/client/Watcher2';

const PredefinedmessageitemoptionsItem = ({ dataWId, id }) => {
  const watcher = useRef(MessagingWatcher).current;
  useWatcher(watcher);
  return (
    <div className={'predefinedmessage-item-options'}>
      <div
        data-w-id={dataWId || 'a8fd72d0-20c2-081c-fda7-5e6e895e1552'}
        className={'contact-table-option'}
        onClick={() => watcher.setValue("PREDEFINED_EDITING_ID", id)}
      >
        <img
          loading={'lazy'}
          src={'images/smarties-quickrep-icon-01.svg'}
          alt={''}
        />
      </div>
      <div className={'contact-table-option'} onClick={async () => await watcher.deletePredefinedAnswer(id)}>
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
