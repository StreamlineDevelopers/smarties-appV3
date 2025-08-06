import React from 'react';

const ContentadditionalbtnItem = ({ src, width, height, divText }) => {
  return (
    <a href="#" target="_blank" className="content-additional-btn">
      <img
        src={src || '../images/mynauirefresh.svg'}
        loading="lazy"
        width={width || '16'}
        height={height || '16'}
        alt=""
        className="content-additional-icon"
      />
      <div>{divText || 'Rephrase Paragraph'}</div>
    </a>
  );
};

export default ContentadditionalbtnItem;
