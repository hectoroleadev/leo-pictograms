import { pictogramSections } from '../../data';
import { MainLayout } from '../../ui';
import {
  PictogramCard,
  PictogramImage,
  PictogramModal,
  PictogramTitle,
} from '../components';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PictogramLayout = ({ children }: Props) => {
  return (
    <MainLayout>
      <div className='d-none d-sm-block'>
        <header className='row justify-content-center row-cols-1'>
          {pictogramSections.map((pictogram) => (
            <PictogramCard
              key={pictogram.id}
              pictogram={pictogram}
              className='border-0'
              style={{ width: '120px', cursor: 'pointer' }}
            >
              <PictogramImage
                image={pictogram.image}
                className='img-thumbnail border-0 mb-0 animate__animated animate__bounce'
              />
              <PictogramTitle className='h4' />
            </PictogramCard>
          ))}
        </header>
      </div>
      <div className='d-block d-sm-none'>
        <nav className='nav justify-content-center '>
          <a className='nav-link active' aria-current='page' href='#'>
            Active
          </a>
          <a className='nav-link' href='#'>
            Link
          </a>
          <a className='nav-link' href='#'>
            Link
          </a>
          <a className='nav-link disabled'>Disabled</a>
        </nav>
      </div>
      <section className='row justify-content-evenly rows-cols-1 row-cols-md-3 row-cols-lg-6 p-2'>
        {children}
      </section>
      <PictogramModal />
    </MainLayout>
  );
};
