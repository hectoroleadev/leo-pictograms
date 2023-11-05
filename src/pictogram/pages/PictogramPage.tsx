import { Navigate, useParams } from 'react-router-dom';
import { getEnvVariables, getPictogramsBySectionId } from '../../helpers';
import { PictogramCard, PictogramImage, PictogramTitle } from '../components';
import { PictogramNavBar } from '../components/PictogramNavBar';
import { usePictogram, usePictogramStore } from '../hooks';

import { PictogramLayout } from '../layouts';
import { useMemo } from 'react';

const { URL_BASE_ROUTER } = getEnvVariables();

export const PictogramPage = () => {
  const { id = '' } = useParams();
  const { pictogramInModal, openPictogramModal } = usePictogramStore();
  const filter = pictogramInModal ? 'blur(2px) opacity(.3)' : 'none';
  const initialState = useMemo(() => getPictogramsBySectionId(id), [id]);

  if (!initialState) {
    return <Navigate to={URL_BASE_ROUTER} />;
  }

  const { pictograms, onClickSection } = usePictogram(initialState);

  return (
    <PictogramLayout>
      <>
        <PictogramNavBar onClick={onClickSection} />
        {pictograms.map((pictogram) => (
          <div
            key={pictogram.id}
            className='col-4 col-lg-3 mx-0 px-1 rounded-2 mb-2 animate__animated animate__pulse'
            style={{ filter }}
          >
            <PictogramCard
              pictogram={pictogram}
              className={`p-2 m-1`}
              style={{
                backgroundColor: pictogram.backgroundColor,
              }}
              onClick={() => openPictogramModal({ pictogram })}
            >
              <PictogramImage className='pictogram' />
              <PictogramTitle className='h3 bg-light rounded-3 mt-2' />
            </PictogramCard>
          </div>
        ))}
      </>
    </PictogramLayout>
  );
};

export default PictogramPage;
