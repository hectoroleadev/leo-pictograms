import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import DashboardComponent from './pictograms/DashboardComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import '../css/App.css';

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
