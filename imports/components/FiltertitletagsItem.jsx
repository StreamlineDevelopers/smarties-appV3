import React from 'react';

const FiltertitletagsItem = ({ divText }) => {
  return (
    <div className="filter-title-tags">
      <div>{divText || 'VP'}</div>
      <div className="filter-title-tags-close">
        <img src="images/smarties-filter-close.svg" loading="lazy" alt="" />
      </div>
    </div>
  );
};

export default FiltertitletagsItem;
