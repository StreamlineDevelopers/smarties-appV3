import React from 'react';
import PoatdateItem from './PoatdateItem';

const PostdatecontainerItem = ({ props }) => {
  return (
    <div className="post-date-container">
      <PoatdateItem />
      <img
        src="../images/iconamoonedit-light.svg"
        loading="lazy"
        width="14"
        height="14"
        alt=""
        className="icon-edit"
      />
    </div>
  );
};

export default PostdatecontainerItem;
