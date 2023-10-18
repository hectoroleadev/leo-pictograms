import { Footer, Header } from '../../ui/components';
import { PictogramZoomed } from '../components';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PictogramLayout = ({ children }: Props) => {
  return (
    <div className='container-fluid'>
      <Header />
      <section className='row justify-content-center align-items-start mx-1'>
        <PictogramZoomed />
        {children}
      </section>
      <Footer />
    </div>
  );
};
