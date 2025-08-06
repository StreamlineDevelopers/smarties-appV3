import React from 'react';
import IconembedItem from './IconembedItem';

const FrequencyradiocardiconItem = ({ d }) => {
  return (
    <div className="frequency-radiocard-icon">
      <IconembedItem
        d={
          d ||
          'M93.74,4.75c1.82,1.26,2.78,3.45,2.44,5.64l-11.56,75.16c-.27,1.75-1.34,3.29-2.89,4.16-1.55.87-3.41.98-5.06.29l-21.61-8.98-12.38,13.39c-1.61,1.75-4.14,2.33-6.36,1.46-2.22-.87-3.67-3.02-3.67-5.4v-15.1c0-.72.27-1.41.76-1.93l30.28-33.05c1.05-1.14,1.01-2.89-.07-3.97-1.08-1.08-2.84-1.16-3.97-.13l-36.75,32.65-15.95-7.99c-1.92-.96-3.14-2.87-3.2-5-.05-2.13,1.07-4.12,2.91-5.19L87.6,4.5c1.93-1.1,4.32-.99,6.14.25Z'
        }
      />
    </div>
  );
};

export default FrequencyradiocardiconItem;
