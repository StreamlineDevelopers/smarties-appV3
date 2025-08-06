import React from 'react';

const MessaginginboxpreviewdivItem = ({ divText }) => {
  return (
    <div className={'messaging-inbox-preview-div'}>
      <div className={'messaging-inbox-preview'}>
        {divText || 'johnsmith@email.com'}
      </div>
    </div>
  );
};

export default MessaginginboxpreviewdivItem;
