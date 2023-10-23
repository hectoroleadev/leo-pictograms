import { MainLayout } from '../../ui';
import { PictogramModal } from '../components';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GalleryLayout = ({ children }: Props) => {
  return (
    <MainLayout>
      <section className='row justify-content-center rows-cols-1 row-cols-md-3 row-cols-lg-6 pt-2'>
        {children}
      </section>
      <PictogramModal />
    </MainLayout>
  );
};
