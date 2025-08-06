import React from 'react';

const Btnstyle1Item249 = ({ src, divText }) => {
  return (
    <a href={'#'} className={'btn-style1 outline w-inline-block'}>
      <div className={'btn-icon'}>
        <img
          src={src || '../images/smarties-copy.svg'}
          loading={'lazy'}
          alt={''}
        />
      </div>
      <div>{divText || 'Copy URL'}</div>
    </a>
  );
};

export default Btnstyle1Item249;
