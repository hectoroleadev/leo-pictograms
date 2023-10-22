import { usePictogramStore } from '../hooks';
import { Pictogram } from '../interfaces';
import { PictogramCard, PictogramImage } from './';

interface PictogramColorListProps {
  classColor: string;
  pictograms: Pictogram[];
}

export const PictogramColorList = ({
  classColor,
  pictograms,
}: PictogramColorListProps) => {
  const { pictogramInModal, openPictogramModal } = usePictogramStore();
  const filter = pictogramInModal ? 'blur(2px) opacity(.3)' : 'none';

  return (
    <div
      className={`col-sm-2 col-4 mx-0 px-1 rounded-2 mb-2`}
      style={{ filter }}
    >
      {pictograms.map((pictogram: Pictogram) => {
        return (
          <div
            key={pictogram.id}
            className='my-2 shadow animate__animated animate__pulse'
          >
            <PictogramCard
              pictogram={pictogram}
              className={classColor}
              onClick={openPictogramModal}
            >
              <PictogramImage image={pictogram.image} className='pictogram' />
            </PictogramCard>
          </div>
        );
      })}
    </div>
  );
};
