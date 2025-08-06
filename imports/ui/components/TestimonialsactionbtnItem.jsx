import React from 'react';
import I3Item from './I3Item';

const TestimonialsactionbtnItem = ({ src }) => {
  return (
    <a href="#" target="_blank" className="testimonials-action-btn">
      <I3Item src={src || '../images/Frame_39.svg'} />
    </a>
  );
};

export default TestimonialsactionbtnItem;
