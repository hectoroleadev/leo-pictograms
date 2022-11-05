import $ from 'jquery';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { moonIcon, sunIcon, URL_BASE } from '../utils/Constants';
import { Tooltip } from 'bootstrap';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: localStorage.getItem('theme') === 'dark' ? true : false,
    };

    this.toggleThemeChange = this.toggleThemeChange.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  componentDidMount() {
    const tooltipTriggerList = $('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );

    this.changeTheme();
  }

  changeTheme() {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
  }

  toggleThemeChange() {
    const { checked } = this.state;
    let theme = 'light';

    if (checked === false) {
      theme = 'dark';
    }

    localStorage.setItem('theme', theme);
    this.changeTheme();

    this.setState({
      checked: !checked,
    });
  }

  render() {
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
                onClick={this.toggleThemeChange}
                alt='theme mode'
                src={this.state.checked ? sunIcon : moonIcon}
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
  }
}

export default HeaderComponent;
