import { Footer, Header } from '../../ui/components';
import { PictogramModal } from '../components';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PictogramLayout = ({ children }: Props) => {
  return (
    <div className='container-fluid'>
      <Header />
      <section className='row justify-content-center rows-cols-1 row-cols-md-3 row-cols-lg-6'>
        {children}
      </section>
      <PictogramModal />
      <Footer />
    </div>
  );
};
