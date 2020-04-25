import React, { Component } from 'react';
import ColorListComponent from './ColorListComponent';
import PictogramZoomedComponent from './PictogramZoomedComponent';
import createData, {
  landscapeStyle,
  portraitStyle
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

  displayImageZoomedHandler(srcImage) {
    const customStyleImage = () => {
      const img = new Image();
      img.src = srcImage;

      return img.width > img.height ? landscapeStyle() : portraitStyle();
    };

    this.setState({
      srcImage,
      isImageDiplayed: true,
      customStyleImage: customStyleImage()
    });
  }

  createColorList(datas, classColor) {
    const filterStyle = this.state.isImageDiplayed
      ? 'blur(2px) opacity(.3)'
      : 'none';

    return (
      <ColorListComponent
        datas={datas}
        classColor={classColor}
        filter={filterStyle}
        displayImageZoomedHandler={this.displayImageZoomedHandler}
        isImageDiplayed={this.state.isImageDiplayed}
      />
    );
  }

  render() {
    return (
      <div className='row justify-content-center'>
        <PictogramZoomedComponent
          customStyleImage={this.state.customStyleImage}
          srcImage={this.state.srcImage}
          isImageDiplayed={this.state.isImageDiplayed}
          hideImageZoomedHandler={this.hideImageZoomedHandler}
        />
        {this.createColorList(createData('objeto'), 'orangeColor')}
        {this.createColorList(createData('verbo'), 'greenColor')}
        {this.createColorList(createData('persona'), 'yellowColor')}
        {this.createColorList(createData('comida'), 'redColor')}
        {this.createColorList(createData('actividad'), 'blueColor')}
        {this.createColorList(createData('social'), 'purpleColor')}
      </div>
    );
  }
}

export default DashboardComponent;
