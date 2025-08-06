import React from 'react';

const Btnstyle1Item118 = ({ src, divText }) => {
  return (
    <a href="#" className="btn-style1 bulkoption w-inline-block">
      <div className="btn-icon">
        <img
          src={src || 'images/smarties-bulkoption-tag.svg'}
          loading="lazy"
          alt=""
        />
      </div>
      <div>{divText || 'Assign Tag'}</div>
    </a>
  );
};

export default Btnstyle1Item118;
