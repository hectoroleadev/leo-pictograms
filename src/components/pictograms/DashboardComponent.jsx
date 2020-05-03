import React, { Component } from 'react';
import ColorListComponent from './ColorListComponent';
import PictogramZoomedComponent from './PictogramZoomedComponent';
import createData from '../../utils/Constants';

class DashboardComponent extends Component {
  render() {
    return (
      <div className='row justify-content-center'>
        <PictogramZoomedComponent />
        <ColorListComponent
          datas={createData('objeto')}
          classColor={'orangeColor'}
        />
        <ColorListComponent
          datas={createData('verbo')}
          classColor={'greenColor'}
        />
        <ColorListComponent
          datas={createData('persona')}
          classColor={'yellowColor'}
        />
        <ColorListComponent
          datas={createData('comida')}
          classColor={'redColor'}
        />
        <ColorListComponent
          datas={createData('actividad')}
          classColor={'blueColor'}
        />
        <ColorListComponent
          datas={createData('social')}
          classColor={'purpleColor'}
        />
      </div>
    );
  }
}

export default DashboardComponent;
