import React from 'react';
import CardformrowleftItem_00e6b879 from './CardformrowleftItem_00e6b879';
import RowselectItem from './RowselectItem';

const CardformrowItem_358a43dd = ({
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
      <CardformrowleftItem_00e6b879
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

export default CardformrowItem_358a43dd;
