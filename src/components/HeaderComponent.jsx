import React, { Component } from 'react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    // Define a state object to hold our app's state
    this.state = {
      // Boolean attribute that will allow us to toggle the switch
      // Keep the switch on if the theme is dark
      checked: localStorage.getItem('theme') === 'dark' ? true : false,
      /**
       * When a user activates the dark theme we will store the value
       * on localstorage or set default value to light if it is neither dark
       * nor light
       */
      theme: localStorage.getItem('theme')
    };

    this.toggleThemeChange = this.toggleThemeChange.bind(this);
  }

  componentDidMount() {
    // Update the data-theme attribute of our html tag
    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
    console.log(localStorage.getItem('theme'));
  }

  // Class method allowing us to toggle the theme change
  toggleThemeChange() {
    const { checked } = this.state;
    // If theme is light then change to dark
    console.log(checked);
    if (checked === false) {
      // Update localstorage
      localStorage.setItem('theme', 'dark');
      /**
       * The document.getElementsByTagName(...).setAttribute(...)
       * will only update the value
       */
      // Update the data-theme attribute of our html tag
    } else {
      // Update localstorage
      localStorage.setItem('theme', 'light');
      /**
       * The document.getElementsByTagName(...).setAttribute(...)
       * will only update the value until the App is mounted and we change
       * the state of the switch so we will need to introduce
       * a React lifecycle called ˝componentDidMount()˝
       */
      // Update the data-theme attribute of our html tag
    }

    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
    // Update our state
    this.setState({
      // Ensure our switch is off if we change to light theme
      checked: !checked
    });
  }

  render() {
    return (
      <div className='d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3 shadow-none'>
        <h4 className='my-0 mr-md-auto font-weight-normal text-muted'>
          Leo's Pictograms
        </h4>
        {
          /*<nav className='my-2 my-md-0 mr-md-3 text-muted'>
            <a className='p-2 text-reset' href='#'>
            Help
          </a>
          </nav>*/
          <label className='switch'>
            {/* checked attribute is used to determine the state of
              checkbox
              ----------------------------------------------
              The onChange attribute will toggle our theme change
            */}
            <input
              type='checkbox'
              checked={this.state.checked}
              //defaultChecked={this.state.checked}
              onChange={this.toggleThemeChange}
            />
            <span className='slider round' />
          </label>
          /*<a className='btn btn-outline-primary' href='#'>
          Sign up
          </a>*/
        }
      </div>
    );
  }
}

export default HeaderComponent;
