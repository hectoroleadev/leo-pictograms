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
    this.hideImageHandler = this.hideImageHandler.bind(this);
    this.displayImageHandler = this.displayImageHandler.bind(this);
    this.createColorList = this.createColorList.bind(this);
  }

  hideImageHandler(e) {
    e.preventDefault();

    this.setState({
      isImageDiplayed: false
    });
  }

  displayImageHandler(srcImage, imageBorderColor) {
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

  createColorList(datas, color) {
    return (
      <div className='d-flex justify-content-center'>
        <ColorListComponent
          datas={datas}
          backgroundColor={color}
          filter={this.state.isImageDiplayed ? 'blur(2px) opacity(.3)' : 'none'}
          displayImageHandler={this.displayImageHandler}
          isImageDiplayed={this.state.isImageDiplayed}
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
              onClick={this.hideImageHandler}
              alt={'pictogramZoom'}
              style={this.state.customStyleImage}
            />
          </div>
        )}
        <div className='row justify-content-md-center'>
          {this.createColorList(createData('objeto'), paleteColors.orange)}
          {this.createColorList(createData('verbo'), paleteColors.green)}
          {this.createColorList(createData('persona'), paleteColors.yellow)}
          {this.createColorList(createData('comida'), paleteColors.red)}
          {this.createColorList(createData('actividad'), paleteColors.blue)}
          {this.createColorList(createData('social'), paleteColors.purple)}
        </div>
      </div>
    );
  }
}

export default DashboardComponent;
