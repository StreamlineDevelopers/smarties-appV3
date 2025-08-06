import React from 'react';
import SelectfieldItem from './SelectfieldItem';

const RowselectItem = ({ id, name, dataName, optionText }) => {
  return (
    <div className={'row-select'}>
      <div className={'form-control-2'}>
        <SelectfieldItem
          id={'Advanced-Audio-Recording'}
          name={'Advanced-Audio-Recording'}
          dataName={'Advanced Audio Recording'}
          value={'deepgram'}
          optionText={'deepgram'}
          optionText1={'Select Format'}
        />
      </div>
    </div>
  );
};

export default RowselectItem;
