import React from 'react';
import MessaginginboxnamerowItem273 from './MessaginginboxnamerowItem273';
import MessaginginboxiconsdivItem274 from './MessaginginboxiconsdivItem274';

const DataenrichmentinboxtextcontentItem = ({ divText, divText1 }) => {
  return (
    <div className="dataenrichment-inbox-textcontent">
      <MessaginginboxnamerowItem273 divText={divText || 'Alex Johnson'} />
      <MessaginginboxiconsdivItem274 divText={divText1 || 'Agent'} />
    </div>
  );
};

export default DataenrichmentinboxtextcontentItem;
