import { Link } from 'react-router-dom';
import { URL_BASE, getDefaultImages } from '../../helpers';
import { useTheme } from '../hooks/useTheme';

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
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-expanded='false'
          aria-controls='navbarNav'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div id='navbarNav' className='collapse navbar-collapse'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to={`${URL_BASE}/cartoons`}>
                <span className='blueColorText'>Cartoons</span>
              </Link>
            </li>
          </ul>
          <div className='ms-auto'>
            <img
              onClick={() => toggleThemeChange()}
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
