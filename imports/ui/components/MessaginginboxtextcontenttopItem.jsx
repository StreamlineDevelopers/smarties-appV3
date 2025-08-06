import React from 'react';
import MessaginginboxnamerowItem from './MessaginginboxnamerowItem';
import MessaginginboxpreviewdivItem from './MessaginginboxpreviewdivItem';

const MessaginginboxtextcontenttopItem = ({ divText, divText1 }) => {
  return (
    <div className={'messaging-inbox-textcontent-top'}>
      <MessaginginboxnamerowItem divText={'Michael Chen'} />
      <MessaginginboxpreviewdivItem divText={'johnsmith@email.com'} />
    </div>
  );
};

export default MessaginginboxtextcontenttopItem;
