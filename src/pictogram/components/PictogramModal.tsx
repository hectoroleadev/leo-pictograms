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
              className={pictogramInModal.className}
              onClick={closePictogramModal}
            >
              <PictogramImage
                image={pictogramInModal.image}
                className='pictogramZoom'
              />
            </PictogramCard>
          </div>
        </div>
      )}
    </>
  );
};
