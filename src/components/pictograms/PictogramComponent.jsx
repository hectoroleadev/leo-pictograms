import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { NO_IMAGE } from '../../utils/Constants';

const PictogramComponent = ({ data, classColor, displayImageZoomed }) => {
  const [image, setImage] = useState(data.image);

  function clickHandler(event) {
    event.preventDefault();

    if (image === NO_IMAGE) {
      return;
    }

    const element = document.querySelector(`.${classColor}`);
    const style = getComputedStyle(element);
    const elm = document.documentElement;

    elm.style.setProperty('--border-color', style.backgroundColor);

    displayImageZoomed(data.image);
  }

  return (
    <div>
      <img
        onClick={(event) => clickHandler(event)}
        src={image}
        alt={data.name}
        className='pictogram m-2 border rounded shadow img-fluid'
        onError={() => setImage(NO_IMAGE)}
      />
    </div>
  );
};

export default connect(null, actions)(PictogramComponent);
