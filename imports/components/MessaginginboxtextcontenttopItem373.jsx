import React from 'react';
import MessaginginboxnamerowItem368 from './MessaginginboxnamerowItem368';
import MessaginginboxpreviewdivItem365 from './MessaginginboxpreviewdivItem365';

const MessaginginboxtextcontenttopItem373 = ({ divText, divText1 }) => {
  return (
    <div className="messaging-inbox-textcontent-top">
      <MessaginginboxnamerowItem368 divText={divText || 'Unclear pricing'} />
      <MessaginginboxpreviewdivItem365
        divText={
          divText1 ||
          '"I like your product, but I can\'t figure out how much it will cost for my team of 15."'
        }
      />
    </div>
  );
};

export default MessaginginboxtextcontenttopItem373;
