import { PictogramColorList } from '../components';
import { createPictograms } from '../../helpers';
import { PictogramLayout } from '../layouts/PictogramLayout';
import { CARTOON_LIST } from '../../fixtures';

export const CartoonPage = () => {
  return (
    <PictogramLayout>
      {CARTOON_LIST.map(({ id, size, classColor, pictogramFolder }) => (
        <PictogramColorList
          key={id}
          pictograms={createPictograms(pictogramFolder, size)}
          classColor={classColor}
        />
      ))}
    </PictogramLayout>
  );
};

export default CartoonPage;
