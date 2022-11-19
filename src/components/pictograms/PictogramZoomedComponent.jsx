import React from 'react';
import { displayImageZoomed } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

const PictogramZoomedComponent = () => {
  const pictogramZoomed = useSelector((state) => state.pictogramZoomed);
  const dispatch = useDispatch();

  return (
    <>
      {pictogramZoomed && (
        <div
          className='d-flex justify-content-center modal'
          onClick={() => dispatch(displayImageZoomed(null))}
        >
          <div className='align-self-center'>
            <img
              className='pictogramZoom shadow rounded img-fluid'
              alt={'pictogramZoom'}
              src={pictogramZoomed}
              onClick={() => dispatch(displayImageZoomed(null))}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PictogramZoomedComponent;
