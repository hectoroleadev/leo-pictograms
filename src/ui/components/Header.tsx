import { Link, NavLink } from 'react-router-dom';
import { getDefaultImages } from '../../helpers';
import { useTheme } from '../hooks/useTheme';
import { Route, defaultRoute, routes } from '../../router';

const generateStyle = (isActive: boolean) =>
  isActive ? 'purpleColorText' : 'blueColorText';

const { moonIcon, sunIcon } = getDefaultImages();

export const Header = () => {
  const { isDarkTheme, toggleThemeChange } = useTheme();

  return (
    <nav className='navbar navbar-expand-sm navbar-dark fixed-top py-1'>
      <div className='container'>
        <Link className='navbar-brand' to={defaultRoute.to}>
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
            {routes.map(({ to, name }: Route) => (
              <NavLink key={to} className='nav-item nav-link' to={to}>
                {({ isActive }) => (
                  <span className={generateStyle(isActive)}>{name}</span>
                )}
              </NavLink>
            ))}
          </div>
          <div className='ms-auto'>
            <img
              onClick={toggleThemeChange}
              alt='theme mode'
              src={isDarkTheme ? sunIcon : moonIcon}
              className='themeIcon'
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
