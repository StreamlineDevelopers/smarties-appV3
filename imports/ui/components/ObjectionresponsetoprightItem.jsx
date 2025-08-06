import React from 'react';
import ResponseconversionratedivItem from './ResponseconversionratedivItem';

const ObjectionresponsetoprightItem = ({ dataWId }) => {
  return (
    <div className="objection-response-topright">
      <ResponseconversionratedivItem />
      <div
        data-w-id={dataWId || '6c69d6e6-d7e0-44df-2be5-fd5ef4d20f56'}
        className="button-options"
      >
        <img
          width="15"
          height="15"
          alt=""
          src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cae0a45e15d21303356de_smarties-icon-menu.svg"
          loading="lazy"
          className="smarties-icon-menu"
        />
      </div>
    </div>
  );
};

export default ObjectionresponsetoprightItem;
