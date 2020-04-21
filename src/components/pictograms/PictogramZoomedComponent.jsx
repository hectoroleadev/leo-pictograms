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
    return (
      <div>
        {this.props.isImageDiplayed && (
          <div className='pictogramZoom position-fixed img-fluid shadow rounded-lg'>
            <img
              src={this.props.srcImage}
              alt={'pictogramZoom'}
              style={this.props.customStyleImage}
              onClick={this.hideImageHandler}
            />
          </div>
        )}
      </div>
    );
  }
}

export default PictogramZoomedComponent;
