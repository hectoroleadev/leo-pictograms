import { NavLink } from 'react-router-dom';
import { pictogramSections } from '../../data';
import { getEnvVariables } from '../../helpers';
import { PictogramCard, PictogramImage } from '../components';
import { OnClickArgs, Pictogram } from '../interfaces';
const { URL_BASE_ROUTER } = getEnvVariables();

interface Props {
  onClick: (args: OnClickArgs) => void;
}

const generateStyle = (isActive: boolean) =>
  isActive ? 'purpleColorText' : 'blueColorText';

export const PictogramNavBar = ({ onClick }: Props) => {
  return (
    <nav className='animate__animated animate__bounce'>
      <div className='d-none d-sm-block '>
        <header className='row justify-content-center row-cols-1'>
          {pictogramSections.map((pictogram) => (
            <PictogramCard
              key={pictogram.id}
              pictogram={pictogram}
              className='border-0 p-0 my-2 me-2'
              onClick={() => onClick({ pictogram })}
              style={{
                width: '100px',
                cursor: 'pointer',
                backgroundColor: pictogram.backgroundColor,
              }}
            >
              <PictogramImage
                image={pictogram.image}
                className='pictogram img-thumbnail'
              />
            </PictogramCard>
          ))}
        </header>
      </div>
      <div className='d-block d-sm-none'>
        <div className='nav align-content-between'>
          {pictogramSections.map((pictogram: Pictogram) => (
            <NavLink
              key={pictogram.id}
              className='nav-item nav-link'
              to={`${URL_BASE_ROUTER}/${pictogram.id}`}
              onClick={() => onClick({ pictogram })}
            >
              {({ isActive }) => (
                <span className={generateStyle(isActive)}>
                  {pictogram.name}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
