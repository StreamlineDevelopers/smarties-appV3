import React from 'react';
import AudioselectionoptionleftItem from './AudioselectionoptionleftItem';
import AudioselectionoptionrightItem from './AudioselectionoptionrightItem';

const AudioselectionoptionItem = ({ src, divText, divText1 }) => {
  return (
    <div className={'audioselection-option'}>
      <AudioselectionoptionleftItem
        src={'../images/smarties-avatar-03_1smarties-avatar-03.png'}
        divText={'Denver'}
        divText1={'Male, Casual'}
      />
      <AudioselectionoptionrightItem />
    </div>
  );
};

export default AudioselectionoptionItem;
