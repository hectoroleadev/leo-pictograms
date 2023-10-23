import { COLOR_LIST } from '../../data';
import { createPictograms } from '../../helpers';
import { PictogramColorList } from '../components';
import { GalleryLayout } from '../layouts';

export const PhotoPage = () => {
  return (
    <GalleryLayout>
      {COLOR_LIST.map(({ id, size, pictogramFolder, backgroundColor }) => (
        <PictogramColorList
          key={id}
          pictograms={createPictograms(pictogramFolder, size, backgroundColor)}
        />
      ))}
    </GalleryLayout>
  );
};

export default PhotoPage;
