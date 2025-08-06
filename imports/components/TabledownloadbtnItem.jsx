import React from 'react';

const TabledownloadbtnItem = ({ props }) => {
  return (
    <a href="#" className="table-download-btn w-inline-block">
      <img
        src="https://cdn.prod.website-files.com/681a00468b98375f74c9201b/681df7ab9dfdbc205facf48b_tabler%3Adownload.svg"
        loading="lazy"
        width="18"
        height="18"
        alt=""
        className="icon-download"
      />
      <div className="table-download-text">Download</div>
    </a>
  );
};

export default TabledownloadbtnItem;
