import { PictogramColorList } from '../components';
import { createPictograms } from '../../helpers';
import { GalleryLayout } from '../layouts';
import { CARTOON_LIST } from '../../data';

export const CartoonPage = () => {
  return (
    <GalleryLayout>
      {CARTOON_LIST.map(({ id, size, pictogramFolder }) => (
        <PictogramColorList
          key={id}
          pictograms={createPictograms(pictogramFolder, size)}
        />
      ))}
    </GalleryLayout>
  );
};

export default CartoonPage;
