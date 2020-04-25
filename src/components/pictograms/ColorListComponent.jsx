import React, { Component } from 'react';
import PictogramComponent from './PictogramComponent';

class ColorListComponent extends Component {
  render() {
    const { classColor, filter, datas } = this.props;

    return (
      <div
        className={`rounded-lg text-center mr-2 ${classColor}`}
        style={{ filter }}
      >
        {datas.map(data => {
          return (
            <PictogramComponent data={data} key={data.id} {...this.props} />
          );
        })}
      </div>
    );
  }
}

export default ColorListComponent;
