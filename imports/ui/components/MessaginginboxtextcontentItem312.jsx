import React from 'react';
import MessaginginboxtextcontenttopItem299 from './MessaginginboxtextcontenttopItem299';
import MessaginginboxtextcontentbotItem305 from './MessaginginboxtextcontentbotItem305';

const MessaginginboxtextcontentItem312 = ({
  divText,
  divText1,
  divText2,
  dataWId,
  divText3,
}) => {
  return (
    <div className={'messaging-inbox-textcontent'}>
      <MessaginginboxtextcontenttopItem299
        divText={'Emma Wilson'}
        divText1={
          'I’m having an issue with logging in after the latest update...'
        }
      />
      <MessaginginboxtextcontentbotItem305
        divText={'Feature request follow-up'}
        dataWId={'5412962f-dc78-9f6c-9b1b-5129db7c78df'}
        divText1={'25m ago'}
      />
    </div>
  );
};

export default MessaginginboxtextcontentItem312;
