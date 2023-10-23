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
        <div
          className={'col-6 col-sm-4 col-lg-3 mx-0 px-1 rounded-2 mb-2'}
          style={{ filter, cursor: 'pointer' }}
        >
          <PictogramCard
            key={pictogram.id}
            pictogram={pictogram}
            className={`p-2 m-0 ms-1`}
            style={{
              backgroundColor: pictogram.backgroundColor,
            }}
            onClick={openPictogramModal}
          >
            <PictogramImage />
            <PictogramTitle className='h3 bg-light rounded-3 mt-2' />
          </PictogramCard>
        </div>
      ))}
    </PictogramLayout>
  );
};

export default PictogramPage;
