import React, { useRef } from 'react';
import MessagingWatcher from '../../api/client/watchers/MessagingWatcher';
import { useWatcher } from '../../api/client/Watcher2';

const PredefinedmessageitemoptionsItem_755941bf = ({ dataWId, dataWId1, id }) => {
  const watcher = useRef(MessagingWatcher).current;
  useWatcher(watcher);

  const editedText = watcher.getValue("PREDEFINED_MESSAGE_EDIT") ?? "";

  return (
    <div className={'predefinedmessage-item-options'}>
      <div
        data-w-id={dataWId || 'e9961061-815e-bc1d-0680-25a48e920598'}
        className={'contact-table-option'}
        onClick={async () => {
          watcher.setValue("PREDEFINED_EDITING_ID", null);
          await watcher.updatePredefinedAnswer(id, { body: editedText })
        }}
      >
        <img
          loading={'lazy'}
          src={'images/smarties-quickrep-icon-04.svg'}
          alt={''}
        />
      </div>
      <div
        data-w-id={dataWId1 || 'e9961061-815e-bc1d-0680-25a48e92059a'}
        className={'contact-table-option'}
        onClick={() => {
          watcher.setValue("PREDEFINED_EDITING_ID", null);
          watcher.setValue("PREDEFINED_MESSAGE_EDIT", "");
        }}
      >
        <img
          loading={'lazy'}
          src={'images/smarties-quickrep-icon-03.svg'}
          alt={''}
        />
      </div>
    </div>
  );
};

export default PredefinedmessageitemoptionsItem_755941bf;
