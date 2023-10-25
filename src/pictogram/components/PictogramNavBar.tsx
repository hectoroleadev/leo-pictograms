import { NavLink } from 'react-router-dom';
import {
  generateActiveStyle,
  getEnvVariables,
  getPictogramSections,
} from '../../helpers';
import { PictogramCard, PictogramImage } from '../components';
import { Pictogram } from '../interfaces';
const { URL_BASE_ROUTER } = getEnvVariables();
const pictogramSections = getPictogramSections();

interface Props {
  onClick: (id: string) => void;
}

export const PictogramNavBar = ({ onClick }: Props) => {
  return (
    <nav className='animate__animated animate__bounce'>
      <div className='d-none d-sm-block '>
        <header className='row justify-content-center row-cols-1'>
          {pictogramSections.map((pictogram: Pictogram) => (
            <PictogramCard
              key={pictogram.id}
              pictogram={pictogram}
              className='border-0 p-0 my-2 me-2'
              onClick={() => onClick(pictogram.id)}
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
          {pictogramSections.map(({ id, name }: Pictogram) => (
            <NavLink
              key={id}
              className='nav-item nav-link'
              to={`${URL_BASE_ROUTER}/${id}`}
              onClick={() => onClick(id)}
            >
              {({ isActive }) => (
                <span className={generateActiveStyle(isActive)}>{name}</span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
