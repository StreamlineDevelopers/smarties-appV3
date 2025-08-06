import React from 'react';
import OptimizationcardleftItem from './OptimizationcardleftItem';

const OptimizationcardItem = ({ title }) => {
  return (
    <div className="optimization-card">
      <OptimizationcardleftItem
        src="../images/smarties-icon-check-full.svg"
        title={title || 'Title is optimized'}
      />
      <a href="#" className="optimzation-link">
        Edit
      </a>
    </div>
  );
};

export default OptimizationcardItem;
