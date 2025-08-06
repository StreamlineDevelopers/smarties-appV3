import React from 'react';
import PodcastitemcontroldivItem from './PodcastitemcontroldivItem';

const PodcastitembodycontentItem = ({ props }) => {
  return (
    <div className="podcast-item-bodycontent">
      <textarea
        placeholder="Introduction text"
        maxlength="5000"
        id="field-2"
        name="field-2"
        data-name="Field 2"
        className="podcast-textarea w-input"
      ></textarea>
      <PodcastitemcontroldivItem />
    </div>
  );
};

export default PodcastitembodycontentItem;
