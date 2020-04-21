import React, { Component } from 'react';
import PictogramComponent from './PictogramComponent';

class ColorListComponent extends Component {
  render() {
    let { backgroundColor, filter } = this.props;

    let customsStyle = {
      backgroundColor,
      filter
    };

    return (
      <div className='rounded-lg text-center mr-2' style={customsStyle}>
        {this.props.datas.map(data => {
          return (
            <PictogramComponent data={data} key={data.id} {...this.props} />
          );
        })}
      </div>
    );
  }
}

export default ColorListComponent;
