import { COLOR_LIST } from '../../fixtures';
import { createPictograms } from '../../helpers';
import { PictogramColorList } from '../components';
import { PictogramLayout } from '../layouts/PictogramLayout';

export const PictogramPage = () => {
  return (
    <PictogramLayout>
      {COLOR_LIST.map(({ id, size, classColor, pictogramFolder }) => (
        <PictogramColorList
          key={id}
          pictograms={createPictograms(pictogramFolder, size)}
          classColor={classColor}
        />
      ))}
    </PictogramLayout>
  );
};

export default PictogramPage;
