import React from 'react';
import MessaginginboxnamerowItem329 from './MessaginginboxnamerowItem329';
import MessaginginboxpreviewdivItem330 from './MessaginginboxpreviewdivItem330';

const MessaginginboxtextcontenttopItem343 = ({ divText, divText1 }) => {
  return (
    <div className="messaging-inbox-textcontent-top">
      <MessaginginboxnamerowItem329 divText={divText || 'Emma Wilson'} />
      <MessaginginboxpreviewdivItem330
        divText={
          divText1 ||
          'I’m having an issue with logging in after the latest update...'
        }
      />
    </div>
  );
};

export default MessaginginboxtextcontenttopItem343;
