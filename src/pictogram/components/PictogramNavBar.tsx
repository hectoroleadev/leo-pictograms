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
    <div className='animate__animated animate__bounce'>
      <div className='d-none d-sm-block'>
        <div className='nav justify-content-center'>
          {pictogramSections.map((pictogram: Pictogram) => (
            <NavLink
              key={pictogram.id}
              className='nav-item nav-link'
              to={`${URL_BASE_ROUTER}/${pictogram.id}`}
            >
              {({ isActive }) => (
                <PictogramCard
                  pictogram={pictogram}
                  className='border-0 p-1 mb-2 me-2'
                  onClick={() => onClick(pictogram.id)}
                  style={{
                    width: '100px',
                    cursor: 'pointer',
                    backgroundColor: pictogram.backgroundColor,
                    boxShadow: isActive ? '2px 2px 5px var(--blue-color)' : '',
                  }}
                >
                  <PictogramImage
                    image={pictogram.image}
                    className='pictogram img-thumbnail'
                  />
                </PictogramCard>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div className='d-block d-sm-none'>
        <div className='nav justify-content-center'>
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
    </div>
  );
};
