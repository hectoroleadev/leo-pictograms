import React, { Component } from 'react';

class PictogramZoomedComponent extends Component {
  constructor(props) {
    super(props);
    this.hideImageHandler = this.hideImageHandler.bind(this);
  }

  hideImageHandler(e) {
    e.preventDefault();
    this.props.hideImageZoomedHandler();
  }

  render() {
    const showHideClassName = this.props.isImageDiplayed
      ? 'modal d-block'
      : 'modal d-none';

    return (
      <div className={showHideClassName} onClick={this.hideImageHandler}>
        <img
          className='pictogramZoom shadow-md rounded-lg'
          alt={'pictogramZoom'}
          src={this.props.srcImage}
          style={this.props.customStyleImage}
          onClick={this.hideImageHandler}
        />
      </div>
    );
  }
}

export default PictogramZoomedComponent;
