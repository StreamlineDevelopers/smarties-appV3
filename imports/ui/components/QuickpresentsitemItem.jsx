import React from 'react';
import QuickpresentsitemleftItem from './QuickpresentsitemleftItem';
import QuickpresentsitemleftItem_36a3311e from './QuickpresentsitemleftItem_36a3311e';

const QuickpresentsitemItem = ({ itemText }) => {
  return (
    <a href={'#'} target={'_blank'} className={'quickpresents-item'}>
      <QuickpresentsitemleftItem itemText={'Limited-time discount'} />
      <QuickpresentsitemleftItem_36a3311e />
    </a>
  );
};

export default QuickpresentsitemItem;
