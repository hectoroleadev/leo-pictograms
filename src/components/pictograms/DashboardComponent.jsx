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
      <section className='row align-items-start'>
        <PictogramZoomedComponent />
        {this.renderColorListComponent()}
      </section>
    );
  }
}

export default DashboardComponent;
