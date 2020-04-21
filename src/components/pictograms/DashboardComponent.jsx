import React, { Component } from 'react';
import ColorListComponent from './ColorListComponent';
import PictogramZoomedComponent from './PictogramZoomedComponent';
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

    this.hideImageZoomedHandler = this.hideImageZoomedHandler.bind(this);
    this.displayImageZoomedHandler = this.displayImageZoomedHandler.bind(this);
    this.createColorList = this.createColorList.bind(this);
  }

  hideImageZoomedHandler() {
    this.setState({
      isImageDiplayed: false
    });
  }

  displayImageZoomedHandler(srcImage, imageBorderColor) {
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
      <ColorListComponent
        datas={datas}
        backgroundColor={color}
        filter={this.state.isImageDiplayed ? 'blur(2px) opacity(.3)' : 'none'}
        displayImageZoomedHandler={this.displayImageZoomedHandler}
        isImageDiplayed={this.state.isImageDiplayed}
      />
    );
  }

  render() {
    return (
      <div className='row justify-content-md-center'>
        <PictogramZoomedComponent
          {...this.state}
          hideImageZoomedHandler={this.hideImageZoomedHandler}
        />

        {this.createColorList(createData('objeto'), paleteColors.orange)}
        {this.createColorList(createData('verbo'), paleteColors.green)}
        {this.createColorList(createData('persona'), paleteColors.yellow)}
        {this.createColorList(createData('comida'), paleteColors.red)}
        {this.createColorList(createData('actividad'), paleteColors.blue)}
        {this.createColorList(createData('social'), paleteColors.purple)}
      </div>
    );
  }
}

export default DashboardComponent;
