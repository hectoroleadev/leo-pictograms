import React, { Component } from 'react';
import ColorListComponent from './ColorListComponent';
import PictogramZoomedComponent from './PictogramZoomedComponent';
import createData, { COLOR_LIST } from '../../utils/Constants';

class DashboardComponent extends Component {
  renderColorListComponent() {
    return COLOR_LIST.map(({ datas, classColor }) => {
      return (
        <ColorListComponent
          key={classColor}
          datas={createData(datas)}
          classColor={classColor}
        />
      );
    });
  }

  render() {
    return (
      <div className='row justify-content-center'>
        <PictogramZoomedComponent />
        {this.renderColorListComponent()}
      </div>
    );
  }
}

export default DashboardComponent;
