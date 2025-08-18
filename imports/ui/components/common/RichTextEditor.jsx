// RichTextEditor.jsx
import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Define your custom toolbar options
const toolbarOptions = [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
];

// Default modules for Quill
const modules = {
    toolbar: toolbarOptions,
};

// Default formats for Quill
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image'
];

// Reusable Component
const RichTextEditor = ({ value, onChange, placeholder }) => {
    const quillRef = useRef(null);

    return (
        <ReactQuill
            style={{ height: '400px' }}
            ref={quillRef}
            value={value}
            onChange={onChange}
            modules={modules}
            formats={formats}
            placeholder={placeholder || 'Write something here...'}
            theme="snow"
        />
    );
};

export default RichTextEditor;