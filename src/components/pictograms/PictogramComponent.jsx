import React, { Component } from 'react';
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

    if (this.state.image === noImage || this.props.isImageDiplayed) {
      return;
    }

    this.props.displayImageHandler(
      this.props.data.image,
      this.props.backgroundColor
    );
  }

  handleImageLoaded() {
    let customImage = landscapeThumbnailStyle;

    if (this.state.image !== noImage) {
      let img = new Image();
      img.src = this.props.data.image;
      let isLandscape = img.width > img.height ? true : false;

      customImage = isLandscape
        ? landscapeThumbnailStyle
        : portraitThumbnailStyle;
    }

    this.setState({ isImageLoaded: true, customImage });
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
      <div className='overflow-hidden p-2 pictogram'>
        <img
          onClick={this.clickHandler}
          src={this.state.image}
          alt={this.props.data.name}
          className='img-thumbnail'
          style={this.state.customImage}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
        />
      </div>
    );
  }
}

export default PictogramComponent;
