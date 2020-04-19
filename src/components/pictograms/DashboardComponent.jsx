import React, { Component } from 'react';
import ColorListComponent from './ColorListComponent';
import createData, {
  landscapeStyle,
  portraitStyle,
  paleteColors
} from '../../utils/Constants';

class DashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcImage: '',
      imageBorderColor: null,
      isImageDiplayed: false
    };
    // Bind properties to class instance
    this._hideImageHandler = this._hideImageHandler.bind(this);
    this._displayImageHandler = this._displayImageHandler.bind(this);
    this._createColorList = this._createColorList.bind(this);
  }

  _hideImageHandler(e) {
    e.preventDefault();

    this.setState({
      isImageDiplayed: false
    });
  }

  _displayImageHandler(srcImage, imageBorderColor) {
    this.setState({
      srcImage,
      imageBorderColor,
      isImageDiplayed: true
    });
  }

  _createColorList(data, color) {
    return (
      <div className='d-flex justify-content-center'>
        <ColorListComponent
          data={data}
          color={{
            backgroundColor: color,
            filter: this.state.isImageDiplayed
              ? 'blur(2px) opacity(.3)'
              : 'none'
          }}
          displayImageHandler={this._displayImageHandler}
        />
      </div>
    );
  }

  render() {
    let customImage = {};

    if (this.state.isImageDiplayed) {
      let img = new Image();
      let border = `10px solid ${this.state.imageBorderColor}`;
      img.src = this.state.srcImage;
      customImage =
        img.width > img.height ? landscapeStyle(border) : portraitStyle(border);
    }

    return (
      <div>
        {this.state.isImageDiplayed && (
          <img
            src={this.state.srcImage}
            onClick={this._hideImageHandler}
            className='pictogramZoom position-absolute rounded-lg img-fluid shadow'
            alt={'pictogramZoom'}
            style={customImage}
          />
        )}
        <div className='row justify-content-md-center'>
          {this._createColorList(createData('objeto'), paleteColors.orange)}
          {this._createColorList(createData('verbo'), paleteColors.green)}
          {this._createColorList(createData('persona'), paleteColors.yellow)}
          {this._createColorList(createData('comida'), paleteColors.red)}
          {this._createColorList(createData('actividad'), paleteColors.blue)}
          {this._createColorList(createData('social'), paleteColors.purple)}
        </div>
      </div>
    );
  }
}

export default DashboardComponent;
