import React from 'react';
import moment from 'moment';
// Component: DashboardassistantItem
// Type: repetition
// Props: []

const DashboardassistantItem = ({
  name = "Customer Support Assistant",
  createdAt = "2 days ago",
}) => {
  return (
    <div className="dashboard-assistant">
      <div className="dashboard-assistant-left">
        <div className="db-assistant-icon">
          <img src="images/smarties-head.png" loading="lazy" alt="" />
        </div>
        <div className="assistant-textcontent">
          <div className="db-card-title">{name}</div>
          <div className="uploadeditem-filesize">Created {moment(createdAt).fromNow()}</div>
        </div>
      </div>
      <div className="dashboard-assistant-right">
        <div className="db-tag"><div>ACTIVE</div>
        </div>
        {/* <img src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bd1f9aa9453320010948c_More-vertical.svg"
          loading="lazy" width="20" height="20" alt="" className="icon-style1" /> */}
      </div>
    </div>
  );
};

export default DashboardassistantItem;