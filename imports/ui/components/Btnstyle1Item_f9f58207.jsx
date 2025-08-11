import React from 'react';

const Btnstyle1Item_f9f58207 = ({ src, divText }) => {
  return (
    <a href={'#'} className={'btn-style1 w-inline-block'}>
      <div className={'btn-icon'}>
        <img src={src || 'images/Search_1.svg'} loading={'lazy'} alt={''} />
      </div>
      <div>{divText || 'New Contact'}</div>
    </a>
  );
};

export default Btnstyle1Item_f9f58207;
