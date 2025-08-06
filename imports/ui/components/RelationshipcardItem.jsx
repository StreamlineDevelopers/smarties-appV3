import React from 'react';
import DbquickactiontextcontentItem204 from './DbquickactiontextcontentItem204';

const RelationshipcardItem = ({ src, title, divText }) => {
  return (
    <div className={'relationship-card'}>
      <div className={'insights-icon'}>
        <img
          src={src || '../images/smarties-icon-bulb.svg'}
          loading={'lazy'}
          width={'25'}
          height={'25'}
          alt={''}
          className={'card-icon-image'}
        />
      </div>
      <DbquickactiontextcontentItem204
        title={'Anniversary Coming Up'}
        divText={
          "Customer's 2-year anniversary with your service is in 15 days."
        }
      />
    </div>
  );
};

export default RelationshipcardItem;
