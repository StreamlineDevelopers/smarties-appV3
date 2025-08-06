import React from 'react';
import MessaginginboxtextcontenttopItem from './MessaginginboxtextcontenttopItem';
import MessaginginboxtextcontentbotItem from './MessaginginboxtextcontentbotItem';

const MessaginginboxtextcontentItem = ({ divText, divText1 }) => {
  return (
    <div className="messaging-inbox-textcontent">
      <MessaginginboxtextcontenttopItem
        divText={divText || 'Michael Chen'}
        divText1={divText1 || 'johnsmith@email.com'}
      />
      <MessaginginboxtextcontentbotItem />
    </div>
  );
};

export default MessaginginboxtextcontentItem;
