import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <div className='d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3 shadow-none'>
        <h4 className='my-0 mr-md-auto font-weight-normal text-muted'>
          Leo's Pictograms
        </h4>
        {/*<nav className='my-2 my-md-0 mr-md-3 text-muted'>
          <a className='p-2 text-reset' href='#'>
            Contact
          </a>
          <a className='p-2 text-reset' href='#'>
            Help
          </a>
        </nav>
        <a className='btn btn-outline-primary' href='#'>
          Sign up
        </a>*/}
      </div>
    );
  }
}

export default HeaderComponent;
