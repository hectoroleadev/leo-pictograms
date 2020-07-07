import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DashboardComponent from './pictograms/DashboardComponent';
import CartoonDashboardComponent from './pictograms/CartoonDashboardComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import { URL_BASE } from '../utils/Constants';
import '../css/App.css';

class LeoPictogramApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container-fluid'>
          <HeaderComponent />
          <Route exact path={`${URL_BASE}/`} component={DashboardComponent} />
          <Route
            path={`${URL_BASE}/cartoons`}
            component={CartoonDashboardComponent}
          />
          <FooterComponent />
        </div>
      </BrowserRouter>
    );
  }
}

export default LeoPictogramApp;
