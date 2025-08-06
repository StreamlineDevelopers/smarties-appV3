import React from 'react';
import HeadlineitemtopItem from './HeadlineitemtopItem';
import HeadlinedurationItem473 from './HeadlinedurationItem473';

const HeadlineradiocardItem = ({ label, divText, divText1, divText2 }) => {
  return (
    <div className="headline-radiocard">
      <HeadlineitemtopItem
        label={label || '10 Ways AI is Transforming Digital Marketing in 2023'}
        divText={divText || 'SEO: 92'}
      />
      <div className="headline-body-text">
        {divText1 ||
          'Explore the latest AI tools and techniques that are revolutionizing how marketers connect with their audience.'}
      </div>
      <HeadlinedurationItem473 divText={divText2 || '5 min read'} />
    </div>
  );
};

export default HeadlineradiocardItem;
