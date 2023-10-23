import { pictograms } from '../../data';
import { PictogramCard, PictogramImage, PictogramTitle } from '../components';
import { usePictogramStore } from '../hooks';
import { PictogramLayout } from '../layouts';

export const PictogramPage = () => {
  const { pictogramInModal, openPictogramModal } = usePictogramStore();
  const filter = pictogramInModal ? 'blur(2px) opacity(.3)' : 'none';
  return (
    <PictogramLayout>
      {pictograms.map((pictogram) => (
        <PictogramCard
          key={pictogram.id}
          pictogram={pictogram}
          className={`p-2 m-2 ms-0`}
          style={{
            backgroundColor: pictogram.backgroundColor,
            cursor: 'pointer',
            filter,
          }}
          onClick={openPictogramModal}
        >
          <PictogramImage />
          <PictogramTitle className='h3 bg-light rounded-3 mt-2' />
        </PictogramCard>
      ))}
    </PictogramLayout>
  );
};

export default PictogramPage;
