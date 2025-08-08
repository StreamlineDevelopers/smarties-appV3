import React from 'react';

const FormbodyItem = ({ handleSearch }) => {
  return (
    <div className={'form-body'}>
      <div className={'form-row mb-0'}>
        <input
          className={'inbox-search w-input'}
          maxlength={'256'}
          name={'search-2'}
          data-name={'Search 2'}
          placeholder={'Search'}
          type={'text'}
          id={'search-2'}
          required
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default FormbodyItem;
