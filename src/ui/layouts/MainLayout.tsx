import { Footer, Header } from '../components';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className='container-fluid'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
