import React from 'react';
import AudioselectionoptiontextcontentdivItem from './AudioselectionoptiontextcontentdivItem';

const AudioselectionoptiontextcontentItem = ({ src, divText, divText1 }) => {
  return (
    <div className={'audioselection-option-textcontent'}>
      <div className={'messaging-inbox-avatar'}>
        <img
          src={src || '../images/smarties-avatar-03_1smarties-avatar-03.png'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <AudioselectionoptiontextcontentdivItem
        divText={'Denver'}
        divText1={'Male, Casual'}
      />
    </div>
  );
};

export default AudioselectionoptiontextcontentItem;
