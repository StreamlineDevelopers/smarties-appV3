import React from 'react';
import DbstatcardleftItem244 from './DbstatcardleftItem244';

const DbstatcardItem246 = ({ title, divText }) => {
  return (
    <div className="db-stat-card _2col">
      <DbstatcardleftItem244
        title={title || 'Lifetime Value'}
        divText={divText || '$1,450'}
      />
    </div>
  );
};

export default DbstatcardItem246;
