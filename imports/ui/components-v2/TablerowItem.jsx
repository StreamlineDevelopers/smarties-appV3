import React from "react";

// Component: TablerowItem
// Type: repetition
// Props: []

const TablerowItem = ({ createdAt = "April 15, 2025", invoiceId = 1001, currency = '$', amountdue = 0, status = "paid", invoicepdf = "download", invoiceUrl = "#" }) => {
  return (
    <div className="table-row">
      <div className="table-cell-div stretch">
        <div className="settings-sublabel">{createdAt}</div>
      </div>
      <div className="table-cell-div stretch">
        <div className="settings-sublabel">{invoiceId}</div>
      </div>
      <div className="table-cell-div stretch">
        <div className="settings-sublabel">{currency}{(amountdue / 100).toFixed(2)}</div>
      </div>
      <div className="table-cell-div stretch">
        <div className="tag" style={{ backgroundColor: status === "paid" ? "#E0F7E0" : "#FFF3CD", color: status === "paid" ? "#28A745" : "#FFC107" }}>
          <div>{status == "" ? "pending" : status}</div>
        </div>
      </div>
      <div className="table-cell-div stretch">
        {invoicepdf && <a href={invoicepdf} className="table-download-btn w-inline-block">
          <img
            src="https://cdn.prod.website-files.com/681a00468b98375f74c9201b/681df7ab9dfdbc205facf48b_tabler%3Adownload.svg"
            loading="lazy"
            width="18"
            height="18"
            alt=""
            className="icon-download"
          />
          <div className="table-download-text">Download</div>
        </a>}
      </div>
    </div>
  );
};

export default TablerowItem;
