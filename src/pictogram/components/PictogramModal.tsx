import { usePictogramStore } from '../hooks';
import { PictogramCard, PictogramImage } from './';

export const PictogramModal = () => {
  const { pictogramInModal, closePictogramModal } = usePictogramStore();

  return (
    <>
      {pictogramInModal && (
        <div
          className={`d-flex justify-content-center modal`}
          onClick={closePictogramModal}
        >
          <div className='align-self-center animate__animated animate__zoomIn'>
            <PictogramCard
              pictogram={pictogramInModal}
              onClick={closePictogramModal}
              style={{
                backgroundColor: pictogramInModal.backgroundColor,
              }}
            >
              <PictogramImage
                image={pictogramInModal.image}
                className='pictogramZoom border border-1'
              />
            </PictogramCard>
          </div>
        </div>
      )}
    </>
  );
};
