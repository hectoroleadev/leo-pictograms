import React, { Component } from 'react';
import DashboardComponent from './components/pictograms/DashboardComponent';
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3 shadow-none'>
          <h5 className='my-0 mr-md-auto font-weight-normal text-muted'>
            Leo's Pictograms
          </h5>
          <nav className='my-2 my-md-0 mr-md-3 text-muted'>
            <a className='p-2 text-reset' href='#'>
              Features
            </a>
            <a className='p-2 text-reset' href='#'>
              Support
            </a>
          </nav>
          <a className='btn btn-outline-primary' href='#'>
            Sign up
          </a>
        </div>
        <DashboardComponent />
        <footer class='footer mt-auto py-3'>
          <div class='container-fluid'>
            <span class='text-muted'>All rights reserved 2020 @macako</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
