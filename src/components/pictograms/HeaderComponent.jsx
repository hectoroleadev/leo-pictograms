import React, { Component } from 'react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: localStorage.getItem('theme') === 'dark' ? true : false
    };

    this.toggleThemeChange = this.toggleThemeChange.bind(this);
  }

  componentDidMount() {
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

    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));

    this.setState({
      checked: !checked
    });
  }

  render() {
    return (
      <header>
        <nav className='navbar navbar-expand'>
          <a className='navbar-brand' href='/'>
            <h4 className='text-muted'>Leo's Pictograms </h4>
          </a>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a className='nav-link text-muted' href='/'>
                  Home<span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  {''}
                </a>
              </li>
            </ul>
            <div className='my-2 my-md-0'>
              <label className='switch'>
                <input
                  type='checkbox'
                  defaultChecked={this.state.checked}
                  onChange={this.toggleThemeChange}
                />
                <span className='slider round' />
              </label>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
