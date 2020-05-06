import _ from 'lodash';
import React, { Component } from 'react';
import ColorListComponent from './ColorListComponent';
import PictogramZoomedComponent from './PictogramZoomedComponent';
import createData, { COLOR_LIST } from '../../utils/Constants';

class DashboardComponent extends Component {
  renderColorListComponent() {
    return _.map(COLOR_LIST, ({ datas, classColor }) => {
      return (
        <ColorListComponent datas={createData(datas)} classColor={classColor} />
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
