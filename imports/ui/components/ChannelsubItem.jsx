import React from 'react';
import WcheckboxItem_36de37cd from './WcheckboxItem_36de37cd';
import WcheckboxItem_ce038a3c from './WcheckboxItem_ce038a3c';

const ChannelsubItem = ({}) => {
  return (
    <div className={'channel-sub'}>
      <div className={'filter-group_row'}>
        <WcheckboxItem_36de37cd
          name={'checkbox-8'}
          id={'checkbox-8'}
          dataName={'Checkbox 8'}
          htmlFor={'checkbox-8'}
          label={'SMS'}
        />
      </div>
      <div className={'filter-group_row'}>
        <WcheckboxItem_36de37cd
          name={'checkbox-9'}
          id={'checkbox-9'}
          dataName={'Checkbox 9'}
          htmlFor={'checkbox-9'}
          label={'Chat'}
        />
      </div>
      <div className={'filter-group_row'}>
        <WcheckboxItem_ce038a3c />
      </div>
    </div>
  );
};

export default ChannelsubItem;
