import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  landscapeThumbnailStyle,
  portraitThumbnailStyle,
  noImage
} from '../../utils/Constants';

class PictogramComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customImage: landscapeThumbnailStyle,
      image: this.props.data.image,
      isImageLoaded: false
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageErrored = this.handleImageErrored.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();

    if (this.state.image === noImage) {
      return;
    }

    const { data, classColor, displayImageZoomed } = this.props;
    const element = document.querySelector(`.${classColor}`);
    const style = getComputedStyle(element);
    const elm = document.documentElement;

    elm.style.setProperty('--border-color', style.backgroundColor);

    displayImageZoomed(data.image);
  }

  handleImageLoaded() {
    const customThumbnailStyle = () => {
      if (this.state.image === noImage) {
        return landscapeThumbnailStyle;
      }

      const img = new Image();
      img.src = this.props.data.image;

      return img.width > img.height
        ? landscapeThumbnailStyle
        : portraitThumbnailStyle;
    };

    this.setState({ isImageLoaded: true, customImage: customThumbnailStyle() });
  }

  handleImageErrored() {
    this.setState({
      image: noImage,
      isImageLoaded: false,
      customImage: landscapeThumbnailStyle
    });
  }

  render() {
    return (
      <div className='overflow-hidden p-2'>
        <img
          onClick={this.clickHandler}
          src={this.state.image}
          alt={this.props.data.name}
          className='img-thumbnail pictogram'
          style={this.state.customImage}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
        />
      </div>
    );
  }
}

export default connect(null, actions)(PictogramComponent);
