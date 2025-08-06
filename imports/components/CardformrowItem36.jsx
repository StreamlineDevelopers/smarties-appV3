import React from 'react';
import CardformrowleftItem20 from './CardformrowleftItem20';
import RowselectItem from './RowselectItem';

const CardformrowItem36 = ({
  src,
  divText,
  description,
  id,
  name,
  dataName,
  optionText,
}) => {
  return (
    <div className="card-form-row">
      <CardformrowleftItem20
        src={
          src ||
          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa188f64b8715716271d_smarties-icon-mic.svg'
        }
        divText={divText || 'Audio Recording'}
        description={
          description || 'Record the conversation with the assistant.'
        }
      />
      <RowselectItem
        id={id || 'Advanced-Audio-Recording'}
        name={name || 'Advanced-Audio-Recording'}
        dataName={dataName || 'Advanced Audio Recording'}
        optionText={optionText || 'Select Format'}
      />
    </div>
  );
};

export default CardformrowItem36;
