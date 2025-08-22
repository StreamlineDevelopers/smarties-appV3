import React, { useRef } from 'react';
import PredefinedmessageitemleftItem from './PredefinedmessageitemleftItem';
import PredefinedmessageitemrightItem from './PredefinedmessageitemrightItem';
import MessagingWatcher from '../../api/client/watchers/MessagingWatcher';
import { useWatcher } from '../../api/client/Watcher2';

const PredefinedmessageitemcontentItem = ({ divText, status, dataWId, dataWId1, id }) => {
  const watcher = useRef(MessagingWatcher).current;
  useWatcher(watcher);

  const isEditing = watcher.getValue("PREDEFINED_EDITING_ID") === id;
  return (
    <div className={'predefinedmessage-item-content'} style={{ display: isEditing ? "none" : "flex" }}>
      <PredefinedmessageitemleftItem divText={divText} />
      <PredefinedmessageitemrightItem
        id={id}
        status={status}
        dataWId={'29ed52c6-4b8b-54d0-8d09-eecab356bbd0'}
        dataWId1={'a8fd72d0-20c2-081c-fda7-5e6e895e1552'}
      />
    </div>
  );
};

export default PredefinedmessageitemcontentItem;
