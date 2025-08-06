import React from 'react';

const SvgiconItem = ({ iconSrc }) => {
  return (
    <div className={'svg-icon w-embed'}>
      <img src={iconSrc} alt="icon" />
    </div>
  );
};

export default SvgiconItem;
