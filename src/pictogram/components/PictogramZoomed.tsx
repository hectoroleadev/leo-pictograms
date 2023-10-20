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
              className='pictogramZoom shadow rounded-4 my-2 img-fluid'
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
