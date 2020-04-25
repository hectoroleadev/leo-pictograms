import React, { Component } from 'react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: localStorage.getItem('theme') === 'dark' ? true : false,
      theme: localStorage.getItem('theme')
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
      <div className='d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3 shadow-none'>
        <h4 className='my-0 mr-md-auto font-weight-normal text-muted'>
          Leo's Pictograms
        </h4>
        <label className='switch'>
          <input
            type='checkbox'
            //checked={this.state.checked}
            defaultChecked={this.state.checked}
            onChange={this.toggleThemeChange}
          />
          <span className='slider round' />
        </label>
      </div>
    );
  }
}

export default HeaderComponent;
