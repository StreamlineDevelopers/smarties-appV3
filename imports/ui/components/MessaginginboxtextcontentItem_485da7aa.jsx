import React from 'react';
import MessaginginboxtextcontenttopItem_b70001eb from './MessaginginboxtextcontenttopItem_b70001eb';
import MessaginginboxtextcontentbotItem_6121060c from './MessaginginboxtextcontentbotItem_6121060c';

const MessaginginboxtextcontentItem_485da7aa = ({
  divText,
  divText1,
  divText2,
  dataWId,
  divText3,
}) => {
  return (
    <div className={'messaging-inbox-textcontent'}>
      <MessaginginboxtextcontenttopItem_b70001eb
        divText={divText}
        divText1={
          divText1
        }
      />
      <MessaginginboxtextcontentbotItem_6121060c
        divText={divText2}
        dataWId={'5412962f-dc78-9f6c-9b1b-5129db7c78df'}
        divText1={divText3}
      />
    </div>
  );
};

export default MessaginginboxtextcontentItem_485da7aa;
