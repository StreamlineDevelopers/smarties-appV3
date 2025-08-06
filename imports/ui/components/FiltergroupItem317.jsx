import React from 'react';
import WcheckboxItem283 from './WcheckboxItem283';
import ChannelsubItem from './ChannelsubItem';
import ChannelsubsubItem from './ChannelsubsubItem';

const FiltergroupItem317 = ({}) => {
  return (
    <div className={'filter-group'}>
      <div className={'filter-label'}>by Client</div>
      <div className={'filter-group_row'}>
        <WcheckboxItem283
          name={'checkbox-10'}
          id={'checkbox-10'}
          dataName={'Checkbox 10'}
          htmlFor={'checkbox-10'}
          label={'Prospect'}
        />
      </div>
      <div className={'filter-group_row'}>
        <WcheckboxItem283
          name={'checkbox-5'}
          id={'checkbox-5'}
          dataName={'Checkbox 5'}
          htmlFor={'checkbox-5'}
          label={'Client'}
        />
      </div>
      <div className={'filter-group_row'}>
        <WcheckboxItem283
          name={'checkbox-4'}
          id={'checkbox-4'}
          dataName={'Checkbox 4'}
          htmlFor={'checkbox-4'}
          label={'Demo'}
        />
      </div>
      <div className={'filter-group_row'}>
        <WcheckboxItem283
          name={'checkbox-3'}
          id={'checkbox-3'}
          dataName={'Checkbox 3'}
          htmlFor={'checkbox-3'}
          label={'Sales'}
        />
      </div>
      <div className={'filter-group_row'}>
        <WcheckboxItem283
          name={'checkbox-3'}
          id={'checkbox-3'}
          dataName={'Checkbox 3'}
          htmlFor={'checkbox-3'}
          label={'Support'}
        />
      </div>
      <div className={'filter-group_row'}>
        <WcheckboxItem283
          name={'checkbox-3'}
          id={'checkbox-3'}
          dataName={'Checkbox 3'}
          htmlFor={'checkbox-3'}
          label={'Issue'}
        />
      </div>
      <div className={'filter-group_row'}></div>
      <ChannelsubItem />
      <ChannelsubsubItem />
    </div>
  );
};

export default FiltergroupItem317;
