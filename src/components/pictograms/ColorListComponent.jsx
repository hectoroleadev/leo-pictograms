import React, { Component } from 'react';
import PictogramComponent from './PictogramComponent';

class ColorListComponent extends Component {
  render() {
    return (
      <div className='rounded-lg text-center mr-1' style={this.props.color}>
        {this.props.data.map(data => {
          return (
            <PictogramComponent
              data={data}
              key={data.id}
              displayImage={this.props.displayImageHandler}
              colorList={this.props.color.backgroundColor}
            />
          );
        })}
      </div>
    );
  }
}

export default ColorListComponent;
