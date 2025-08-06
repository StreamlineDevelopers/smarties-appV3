import React from 'react';
import AudioselectionoptiontextcontentItem from './AudioselectionoptiontextcontentItem';

const AudioselectionoptionleftItem = ({ src, divText, divText1 }) => {
  return (
    <div className={'audioselection-option-left'}>
      <div className={'radoio-button-circle'}></div>
      <AudioselectionoptiontextcontentItem
        src={'../images/smarties-avatar-03_1smarties-avatar-03.png'}
        divText={'Denver'}
        divText1={'Male, Casual'}
      />
    </div>
  );
};

export default AudioselectionoptionleftItem;
