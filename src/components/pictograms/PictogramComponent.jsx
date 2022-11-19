import React, { useState } from 'react';
import { displayImageZoomed } from '../../actions';
import { NO_IMAGE } from '../../utils/Constants';
import { useDispatch } from 'react-redux';

const PictogramComponent = ({ data, classColor }) => {
  const [image, setImage] = useState(data.image);
  const dispatch = useDispatch();

  function clickHandler(event) {
    event.preventDefault();

    if (image === NO_IMAGE) {
      return;
    }

    const element = document.querySelector(`.${classColor}`);
    const style = getComputedStyle(element);
    const elm = document.documentElement;

    elm.style.setProperty('--border-color', style.backgroundColor);

    dispatch(displayImageZoomed(data.image));
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

export default PictogramComponent;
