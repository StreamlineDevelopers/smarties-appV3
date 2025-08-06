import React from 'react';

const AudioselectionoptiontextcontentdivItem = ({ divText, divText1 }) => {
  return (
    <div className="audioselection-option-textcontent-div">
      <div className="voiceoption-name">{divText || 'Denver'}</div>
      <div className="voiceoption-subtext">{divText1 || 'Male, Casual'}</div>
    </div>
  );
};

export default AudioselectionoptiontextcontentdivItem;
