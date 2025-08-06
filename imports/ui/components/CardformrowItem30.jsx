import React from 'react';
import CardformrowleftItem14 from './CardformrowleftItem14';
import RowselectItem from './RowselectItem';

const CardformrowItem30 = ({
  src,
  divText,
  description,
  id,
  name,
  dataName,
  optionText,
}) => {
  return (
    <div className={'card-form-row'}>
      <CardformrowleftItem14
        src={
          'https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa188f64b8715716271d_smarties-icon-mic.svg'
        }
        divText={'Audio Recording'}
        description={'Record the conversation with the assistant.'}
      />
      <RowselectItem
        id={'Advanced-Audio-Recording'}
        name={'Advanced-Audio-Recording'}
        dataName={'Advanced Audio Recording'}
        optionText={'Select Format'}
      />
    </div>
  );
};

export default CardformrowItem30;
