import React from 'react';

const OptimizationcardleftItem = ({ src, title }) => {
  return (
    <div className="optimization-card-left">
      <div className="insights-icon">
        <img
          src={src || '../images/smarties-icon-check-full.svg'}
          loading="lazy"
          width="25"
          height="25"
          alt=""
          className="card-icon-image"
        />
      </div>
      <div className="insights-title">{title || 'Title is optimized'}</div>
    </div>
  );
};

export default OptimizationcardleftItem;
