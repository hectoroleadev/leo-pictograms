import { Link, NavLink } from 'react-router-dom';
import { URL_BASE, getDefaultImages } from '../../helpers';
import { useTheme } from '../hooks/useTheme';

const generateStyle = (isActive: boolean) =>
  isActive ? 'purpleColorText' : 'blueColorText';

export const Header = () => {
  const { moonIcon, sunIcon } = getDefaultImages();
  const { isDarkTheme, toggleThemeChange } = useTheme();

  return (
    <nav className='navbar navbar-expand-sm navbar-dark fixed-top py-1'>
      <div className='container'>
        <Link className='navbar-brand' to={`${URL_BASE}/`}>
          <span className='blueColorText h1'>Leo's pictograms</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <div className='navbar-nav'>
            <NavLink className='nav-item nav-link' to={`${URL_BASE}/photos`}>
              {({ isActive }) => (
                <span className={generateStyle(isActive)}>Photos</span>
              )}
            </NavLink>

            <NavLink className='nav-item nav-link' to={`${URL_BASE}/cartoons`}>
              {({ isActive }) => (
                <span className={generateStyle(isActive)}>Cartoons</span>
              )}
            </NavLink>
          </div>
          <div className='ms-auto'>
            <img
              onClick={toggleThemeChange}
              alt='theme mode'
              src={isDarkTheme ? sunIcon : moonIcon}
              className='themeIcon'
              data-bs-toggle='tooltip'
              data-bs-placement='left'
              data-bs-trigger='hover'
              data-bs-title='<span class="blueColorText gochiHandFontFamily">Switch Between Themes</span>'
              data-bs-html='true'
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
