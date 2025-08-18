import React from 'react';
import BlogtopicradiocardItem from './BlogtopicradiocardItem';

const BlogtopicoptionItem = ({ itemText, label }) => {
  return (
    <label className={'blogtopic-option w-radio'}>
      <div
        className={
          'w-form-formradioinput w-form-formradioinput--inputType-custom blogtopic-radiobutton w-radio-input'
        }
      ></div>
      <input
        type={'radio'}
        data-name={'Radio'}
        id={'radio'}
        name={'radio'}
        style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
        value={'Radio'}
      />
      <BlogtopicradiocardItem
        itemText={itemText}
        label={label}
      />
      <span className={'radio-button-label-2 w-form-label'} htmlFor={'radio'}>
        {'Radio'}
      </span>
    </label>
  );
};

export default BlogtopicoptionItem;
