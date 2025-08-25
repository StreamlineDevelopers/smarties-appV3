import React from 'react';

// Component: NoticetextdivItem
// Type: repetition
// Props: ["textDiv","textDiv1"]

const NoticetextdivItem = ({ textDiv, textDiv1}) => {
  return (
    <div className="notice-textdiv"><div className="form-label notice-yellow">{textDiv || 'No Webhook available'}</div><div className="notice-text">{textDiv1 || 'Create a webhook to receive real-time updates about call events.'}</div><div className="notice-actionlink"><div>Create</div><div className="notice-actionlink-icon"><img loading="lazy" src="../images/smarties-notice-actionlink.svg" alt="" /></div></div></div>
  );
};

export default NoticetextdivItem;