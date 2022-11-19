import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { moonIcon, sunIcon, URL_BASE } from '../utils/Constants';
import { Tooltip } from 'bootstrap';

const HeaderComponent = () => {
  const themes = { dark: 'dark', light: 'light' };
  const [isDarkTheme, setDarkTheme] = useState(
    getTheme() === themes.dark ? true : false
  );

  useEffect(() => {
    const tooltipTriggerList = $('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );
  }, []);

  useEffect(() => {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', getTheme());
  }, [isDarkTheme]);

  function toggleThemeChange() {
    setTheme(isDarkTheme ? themes.light : themes.dark);
    setDarkTheme(!isDarkTheme);
  }

  function getTheme() {
    return localStorage.getItem('theme');
  }

  function setTheme(theme) {
    localStorage.setItem('theme', theme);
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
