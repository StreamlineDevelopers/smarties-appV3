import React from 'react';

// Component: SlidercontainerItem
// Type: repetition
// Props: ["textDiv","textDiv1"]

const SlidercontainerItem = ({ textDiv, textDiv1}) => {
  return (
    <div className="slider-container"><div className="form-slider"><div className="slider"><img width="240" height="6" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cc846b7e69ae040175cbd_Background.svg" loading="lazy" className="background" /><div className="progress"><img width="70" height="6" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cc8469035957598b9db9e_Progress-line.svg" loading="lazy" className="progress-line" /><div className="slider-control"></div></div></div></div><div className="slider-label"><div>{textDiv || 'Slowest'}</div><div>{textDiv1 || 'Fastest'}</div></div></div>
  );
};

export default SlidercontainerItem;