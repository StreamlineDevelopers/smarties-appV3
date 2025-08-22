import React, { useRef } from 'react';
import PredefinedmessageitemoptionsItem_755941bf from './PredefinedmessageitemoptionsItem_755941bf';
import MessagingWatcher from '../../api/client/watchers/MessagingWatcher';
import { useWatcher } from '../../api/client/Watcher2';

const PredefinedmessageitemeditItem = ({ dataWId, dataWId1, id, answer = "" }) => {
  const watcher = useRef(MessagingWatcher).current;
  useWatcher(watcher);

  const isEditing = watcher.getValue("PREDEFINED_EDITING_ID") === id;
  return (
    <div className={'predefinedmessage-item-edit'} style={{ display: isEditing ? "flex" : "none" }}>
      <input
        className={'textfield w-input'}
        maxlength={'256'}
        defaultValue={answer}
        name={'Edit-Message'}
        data-name={'Edit Message'}
        placeholder={'Edit Message'}
        type={'text'}
        id={'Edit-Message'}
        onChange={(e) => watcher.setValue("PREDEFINED_MESSAGE_EDIT", e.target.value)}
        required
      />
      <PredefinedmessageitemoptionsItem_755941bf
        id={id}
        dataWId={'e9961061-815e-bc1d-0680-25a48e920598'}
        dataWId1={'e9961061-815e-bc1d-0680-25a48e92059a'}
      />
    </div>
  );
};

export default PredefinedmessageitemeditItem;
