import React, { Component } from 'react';
import ColorListComponent from './ColorListComponent';
import PictogramZoomedComponent from './PictogramZoomedComponent';
import createData, { CARTOON_LIST } from '../../utils/Constants';

class DashboardComponent extends Component {
  renderColorListComponent() {
    return CARTOON_LIST.map(({ datas, classColor, size }) => {
      return (
        <ColorListComponent
          key={datas}
          datas={createData(datas, size)}
          classColor={classColor}
        />
      );
    });
  }

  render() {
    return (
      <section className='row justify-content-center align-items-start mx-1'>
        <PictogramZoomedComponent />
        {this.renderColorListComponent()}
      </section>
    );
  }
}

export default DashboardComponent;
