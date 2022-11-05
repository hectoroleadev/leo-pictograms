//import '@popperjs/core/lib/popper-lite.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Routes>
            <Route
              exact
              path={`${URL_BASE}/`}
              element={<DashboardComponent />}
            />
            <Route
              path={`${URL_BASE}/cartoons`}
              element={<CartoonDashboardComponent />}
            />
          </Routes>
          <FooterComponent />
        </div>
      </BrowserRouter>
    );
  }
}

export default LeoPictogramApp;
