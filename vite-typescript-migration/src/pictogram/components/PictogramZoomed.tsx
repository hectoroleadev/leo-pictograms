import { usePictogramZoomed } from '../hooks';

export const PictogramZoomed = () => {
  const { pictogramZoomed, onClickImageZoomed } = usePictogramZoomed();

  return (
    <>
      {pictogramZoomed && (
        <div
          className='d-flex justify-content-center modal'
          onClick={onClickImageZoomed}
        >
          <div className='align-self-center'>
            <img
              className='pictogramZoom shadow rounded img-fluid'
              alt={'pictogramZoom'}
              src={pictogramZoomed}
              onClick={onClickImageZoomed}
            />
          </div>
        </div>
      )}
    </>
  );
};
