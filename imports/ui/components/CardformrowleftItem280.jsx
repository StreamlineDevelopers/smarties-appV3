import React from 'react';

const CardformrowleftItem280 = ({ divText }) => {
  return (
    <div className="card-form-row-left">
      <div className="dataenrichment-formrow-icon">
        <img src="../images/smarties-icon-eye.svg" loading="lazy" alt="" />
      </div>
      <div className="card-form-row-text">{divText || 'IP Address'}</div>
    </div>
  );
};

export default CardformrowleftItem280;
