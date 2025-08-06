import React from 'react';
import WcheckboxItem283 from './WcheckboxItem283';
import WcheckboxItem290 from './WcheckboxItem290';

const ChannelsubItem = ({}) => {
  return (
    <div className={'channel-sub'}>
      <div className={'filter-group_row'}>
        <WcheckboxItem283
          name={'checkbox-8'}
          id={'checkbox-8'}
          dataName={'Checkbox 8'}
          htmlFor={'checkbox-8'}
          label={'SMS'}
        />
      </div>
      <div className={'filter-group_row'}>
        <WcheckboxItem283
          name={'checkbox-9'}
          id={'checkbox-9'}
          dataName={'Checkbox 9'}
          htmlFor={'checkbox-9'}
          label={'Chat'}
        />
      </div>
      <div className={'filter-group_row'}>
        <WcheckboxItem290 />
      </div>
    </div>
  );
};

export default ChannelsubItem;
