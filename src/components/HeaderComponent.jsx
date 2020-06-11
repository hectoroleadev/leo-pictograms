import $ from 'jquery';
import React, { Component } from 'react';
import { sunIcon, moonIcon, URL_BASE } from '../utils/Constants';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: localStorage.getItem('theme') === 'dark' ? true : false
    };

    this.toggleThemeChange = this.toggleThemeChange.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
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
      checked: !checked
    });
  }

  render() {
    return (
      <header>
        <nav className='navbar navbar-expand'>
          <a
            className='navbar-brand text-muted font-weight-bold'
            href={`${URL_BASE}/`}>
            <span className='blueColorText'>Leo's </span>
            <span className='blueColorText'>Pictograms</span>
          </a>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href={`${URL_BASE}/`}>
                  <span className='purpleColorText'>Home</span>
                </a>
              </li>
            </ul>
            <div className='ml-auto'>
              <img
                onClick={this.toggleThemeChange}
                alt='theme mode'
                src={this.state.checked ? sunIcon : moonIcon}
                className='themeIcon'
                data-toggle='tooltip'
                data-placement='left'
                title='<span class="blueColorText gochiHandFontFamily">Switch Between Themes</span>'
                data-html='true'
              />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
