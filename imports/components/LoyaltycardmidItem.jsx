import React from 'react';
import LoyaltycardmidcolItem from './LoyaltycardmidcolItem';

const LoyaltycardmidItem = ({ divText, divText1, divText2 }) => {
  return (
    <div className="loyalty-card-mid">
      <LoyaltycardmidcolItem label="Retention" divText={divText || '68%'} />
      <LoyaltycardmidcolItem label="Avg. Spend" divText={divText1 || '$45'} />
      <LoyaltycardmidcolItem label="Perks Used" divText={divText2 || '2.3'} />
    </div>
  );
};

export default LoyaltycardmidItem;
