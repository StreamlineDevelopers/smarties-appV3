import React from 'react';

// Component: CardformrowItem30
// Type: repetition
// Props: ["textDiv","textDiv1","src"]

const CardformrowItem30 = ({ textDiv, textDiv1, src}) => {
  return (
    <div className="card-form-row"><div className="card-form-row-left"><div className="smarties-icon-card-row"><img width="34" height="34" alt="" src={src || "https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681dfa18e91e348baa064b41_smarties-icon-wait.svg"} loading="lazy" /></div><div><div className="card-form-row-text">{textDiv || 'Wait seconds'}</div><div className="card-form-row-description">{textDiv1 || 'This is how long assistant waits before speaking.'}</div></div></div><div className="row-slider"><div className="slider-container"><div className="form-slider"><div className="slider"><img width="240" height="6" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cc846b7e69ae040175cbd_Background.svg" loading="lazy" className="background" /><div className="progress"><img width="70" height="6" alt="" src="https://cdn.prod.website-files.com/681bd50cca2b1f41b87287dc/681cc8469035957598b9db9e_Progress-line.svg" loading="lazy" className="progress-line" /><div className="slider-control"></div></div></div></div><div className="slider-label"><div>1 (sec)</div><div>20 (sec</div></div></div><div className="form-control-2 small"><input className="form-input small w-input" maxlength="256" name="Temperature-2" data-name="Temperature 2" placeholder="0.7" type="number" id="Temperature-2" required /></div></div></div>
  );
};

export default CardformrowItem30;