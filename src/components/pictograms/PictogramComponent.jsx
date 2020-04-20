import React, { Component } from 'react';

class PictogramComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      customImage: {},
      isLandscape: false
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
        mouseOver: true
      });
    }
  }
  _clickHandler(e) {
    e.preventDefault();
    this.props.displayImage(this.props.data.image, this.props.colorList);
  }

  componentDidMount() {
    // Modify styles based on state values
    let customImage = {};

    let img = new Image();
    img.src = this.props.data.image;
    let isLandscape = img.width > img.height ? true : false;
    customImage = isLandscape
      ? {
          width: '12vw',
          height: '8vw'
        }
      : {
          width: '8vw',
          height: '12vw'
        };

    console.log(isLandscape);

    this.setState({
      customImage,
      isLandscape
    });
  }

  render() {
    return (
      <div className='overflow-hidden p-2 pictogram'>
        <img
          onMouseEnter={this._mouseEnter}
          onMouseLeave={this._mouseLeave}
          onClick={this._clickHandler}
          src={this.props.data.image}
          alt={this.props.data.name}
          className='img-thumbnail'
          style={this.state.customImage}
        />
      </div>
    );
  }
}

export default PictogramComponent;
