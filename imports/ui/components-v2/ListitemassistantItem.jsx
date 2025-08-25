import React, { useRef } from 'react';
import AssistantWatcher from '../../api/client/watchers/vapi/AssistantWatcher';
import { useWatcher } from '../../api/client/Watcher2';

// Component: ListitemassistantItem
// Type: repetition
// Props: ["textDiv"]

const ListitemassistantItem = ({ assistant = {} }) => {
  const watcher = useRef(AssistantWatcher).current;
  useWatcher(watcher);

  return (
    <div className="list-item-assistant" tmq="cmp-list-item-assistant" onClick={() => {
      const dbAssistant = watcher.getValue("dbAssistant");
      if (!dbAssistant) {
        watcher.getAssistant(assistant.assistantid);
        watcher.setValue("dbAssistant", assistant);
        watcher.setValue('isChatOpen', false);
        watcher.setValue("chats", []);
        watcher.ChatBot.reset(false);
      }
      if (dbAssistant && dbAssistant.assistantid !== assistant.assistantid) {
        watcher.getAssistant(assistant.assistantid);
        watcher.setValue("dbAssistant", assistant);
        watcher.setValue('isChatOpen', false);
        watcher.setValue("chats", []);
        watcher.ChatBot.reset(false);
      }
      watcher.initialChat();
    }}>
      <div>{assistant.name ? assistant.name : "No Name Assistant"}</div>
    </div>
  );
};

export default ListitemassistantItem;