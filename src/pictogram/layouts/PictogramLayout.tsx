import { MainLayout } from '../../ui';
import { PictogramModal } from '../components';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PictogramLayout = ({ children }: Props) => {
  return (
    <MainLayout>
      <section className='row'>{children}</section>
      <PictogramModal />
    </MainLayout>
  );
};
