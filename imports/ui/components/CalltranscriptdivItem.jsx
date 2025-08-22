import React from 'react';

const CalltranscriptdivItem = ({}) => {
  return (
    <div className={'call-transcript-div'}>
      <div className={'call-transcript-icon'}>
        <img
          loading={'lazy'}
          src={'images/smarties-avatar-icon-calltranscript.svg'}
          alt={''}
        />
      </div>
      <div>{'Call Transcript'}</div>
    </div>
  );
};

export default CalltranscriptdivItem;
