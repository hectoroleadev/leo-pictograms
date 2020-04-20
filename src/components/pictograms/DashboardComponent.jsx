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
      isImageDiplayed: false,
      customStyleImage: {}
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
    let border = `10px solid ${imageBorderColor}`;
    let img = new Image();
    img.src = srcImage;

    let customStyleImage =
      img.width > img.height ? landscapeStyle(border) : portraitStyle(border);

    this.setState({
      srcImage,
      isImageDiplayed: true,
      customStyleImage
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
    return (
      <div>
        {this.state.isImageDiplayed && (
          <div className='pictogramZoom position-absolute img-fluid shadow rounded-lg'>
            <img
              src={this.state.srcImage}
              onClick={this._hideImageHandler}
              alt={'pictogramZoom'}
              style={this.state.customStyleImage}
            />
          </div>
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
