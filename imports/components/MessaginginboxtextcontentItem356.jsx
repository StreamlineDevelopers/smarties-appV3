import React from 'react';
import MessaginginboxtextcontenttopItem343 from './MessaginginboxtextcontenttopItem343';
import MessaginginboxtextcontentbotItem349 from './MessaginginboxtextcontentbotItem349';

const MessaginginboxtextcontentItem356 = ({
  divText,
  divText1,
  divText2,
  dataWId,
  divText3,
}) => {
  return (
    <div className="messaging-inbox-textcontent">
      <MessaginginboxtextcontenttopItem343
        divText={divText || 'Emma Wilson'}
        divText1={
          divText1 ||
          'I’m having an issue with logging in after the latest update...'
        }
      />
      <MessaginginboxtextcontentbotItem349
        divText={divText2 || 'Feature request follow-up'}
        dataWId={dataWId || '5412962f-dc78-9f6c-9b1b-5129db7c78df'}
        divText1={divText3 || '25m ago'}
      />
    </div>
  );
};

export default MessaginginboxtextcontentItem356;
