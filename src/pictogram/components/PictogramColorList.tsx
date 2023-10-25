import { usePictogramStore } from '../hooks';
import { Pictogram } from '../interfaces';
import { PictogramCard, PictogramImage } from './';

interface PictogramColorListProps {
  pictograms: Pictogram[];
}

export const PictogramColorList = ({ pictograms }: PictogramColorListProps) => {
  const { pictogramInModal, openPictogramModal } = usePictogramStore();
  const filter = pictogramInModal ? 'blur(2px) opacity(.3)' : 'none';

  return (
    <div
      className={`col-sm-2 col-4 mx-0 px-1 rounded-2 mb-2`}
      style={{ filter }}
    >
      {pictograms.map((pictogram: Pictogram) => (
        <div
          key={pictogram.id}
          className='shadow animate__animated animate__pulse mb-2'
        >
          <PictogramCard
            pictogram={pictogram}
            className={!pictogram.backgroundColor ? 'bg-transparent' : ''}
            style={{ backgroundColor: pictogram.backgroundColor }}
            onClick={() => openPictogramModal({ pictogram })}
          >
            <PictogramImage
              image={pictogram.image}
              className='pictogram border border-1'
            />
          </PictogramCard>
        </div>
      ))}
    </div>
  );
};
