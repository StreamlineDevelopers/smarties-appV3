import React from 'react';

const DocumentdownloadItem = ({}) => {
  return (
    <div className={'document-download'}>
      <a
        href={'#'}
        target={'_blank'}
        className={'convo-fileattachment-iconbtn'}
      >
        <img
          width={'16'}
          height={'16'}
          alt={''}
          src={'images/Frame_18.svg'}
          loading={'lazy'}
          className={'convo-fileattachment-icon-image'}
        />
      </a>
    </div>
  );
};

export default DocumentdownloadItem;
