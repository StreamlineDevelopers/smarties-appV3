import React from 'react';

const MenuitemItem44 = ({ src, divText }) => {
  return (
    <div className={'menu-item'}>
      <div className={'menu-item-icon'}>
        <img
          loading={'lazy'}
          src={src || '../images/smarties-icon-version.svg'}
          alt={''}
        />
      </div>
      <div>{divText || 'Version History'}</div>
    </div>
  );
};

export default MenuitemItem44;
