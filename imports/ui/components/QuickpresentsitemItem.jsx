import React from 'react';
import QuickpresentsitemleftItem from './QuickpresentsitemleftItem';
import QuickpresentsitemleftItem322 from './QuickpresentsitemleftItem322';

const QuickpresentsitemItem = ({ itemText }) => {
  return (
    <a href={'#'} target={'_blank'} className={'quickpresents-item'}>
      <QuickpresentsitemleftItem itemText={'Limited-time discount'} />
      <QuickpresentsitemleftItem322 />
    </a>
  );
};

export default QuickpresentsitemItem;
