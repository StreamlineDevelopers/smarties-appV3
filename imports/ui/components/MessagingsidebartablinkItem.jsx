import React from 'react';
import MessagingtabiconItem from './MessagingtabiconItem';

const MessagingsidebartablinkItem = ({ dataWTab, iconSrc, divText }) => {
  return (
    <a
      data-w-tab={dataWTab || 'Tab 2'}
      className={'messaging-sidebar-tablink w-inline-block w-tab-link'}
    >
      <MessagingtabiconItem
        iconSrc={'/svgs/icon-c4c334612b8081823acfb1fc45803c21.svg'}
      />
      <div>{divText || 'Journey'}</div>
    </a>
  );
};

export default MessagingsidebartablinkItem;
