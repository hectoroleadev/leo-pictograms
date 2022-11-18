import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { moonIcon, sunIcon, URL_BASE } from '../utils/Constants';
import { Tooltip } from 'bootstrap';

const HeaderComponent = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );

  useEffect(() => {
    const tooltipTriggerList = $('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );

    changeTheme();
  });

  function changeTheme() {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
  }

  function toggleThemeChange() {
    localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
    changeTheme();
    setIsDarkTheme(!isDarkTheme);
  }

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
          ria-expanded='false'
          aria-controls='navbarNav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to={`${URL_BASE}/`}>
                <span className='purpleColorText'>Home</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={`${URL_BASE}/cartoons`}>
                <span className='purpleColorText'>Cartoons</span>
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

export default HeaderComponent;
