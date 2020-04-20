import React, { Component } from 'react';
import DashboardComponent from './pictograms/DashboardComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

class LeoPictogramApp extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <HeaderComponent />
        <DashboardComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default LeoPictogramApp;
