import React, { Component } from 'react';

class PictogramComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    };

    this._clickHandler = this._clickHandler.bind(this);
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
  }

  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      this.setState({
        mouseOver: true
      });
    }
  }
  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false
      });
    }
  }
  _clickHandler(e) {
    e.preventDefault();
    this.props.displayImage(this.props.data.image, this.props.colorList);
  }

  render() {
    // Modify styles based on state values
    let customImage = {};

    let img = new Image();
    img.src = this.props.data.image;
    let isLandscape = img.width > img.height ? true : false;
    customImage = isLandscape
      ? {
          width: '15vw',
          height: '10vw'
        }
      : {
          width: '10vw',
          height: '15vw'
        };

    return (
      <div
        className={
          isLandscape
            ? 'overflow-hidden pictogram'
            : 'overflow-hidden pictogram-portrait'
        }
      >
        <img
          onMouseEnter={this._mouseEnter}
          onMouseLeave={this._mouseLeave}
          onClick={this._clickHandler}
          src={this.props.data.image}
          alt={this.props.data.name}
          className='img-fluid rounded-lg img-thumbnail'
          style={customImage}
        />
      </div>
    );
  }
}

export default PictogramComponent;
