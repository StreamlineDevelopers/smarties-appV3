import React from 'react';
import DbquickactiontextcontentItem_d0e2d9ee from './DbquickactiontextcontentItem_d0e2d9ee';

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
      <DbquickactiontextcontentItem_d0e2d9ee
        title={'Anniversary Coming Up'}
        divText={
          "Customer's 2-year anniversary with your service is in 15 days."
        }
      />
    </div>
  );
};

export default RelationshipcardItem;
