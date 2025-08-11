import React from 'react';

const Btnstyle1Item_f29e50c2 = ({ src, divText }) => {
  return (
    <a href={'#'} className={'btn-style1 outline w-inline-block'}>
      <div className={'btn-icon'}>
        <img
          src={src || 'images/smarties-btnicon-export.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div>{divText || 'Export'}</div>
    </a>
  );
};

export default Btnstyle1Item_f29e50c2;
