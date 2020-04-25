import React, { Component } from 'react';
import LeoPictogramApp from './components/pictograms/LeoPictogramApp';
import './bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LeoPictogramApp />
      </div>
    );
  }
}

export default App;
