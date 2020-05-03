import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { landscapeStyle, portraitStyle } from '../../utils/Constants';

class PictogramZoomedComponent extends Component {
  render() {
    const { pictogramZoomed, displayImageZoomed } = this.props;
    const customStyleImage = () => {
      const img = new Image();
      img.src = pictogramZoomed;

      return img.width > img.height ? landscapeStyle() : portraitStyle();
    };

    return (
      <>
        {pictogramZoomed && (
          <div
            className='modal d-block'
            onClick={() => displayImageZoomed(null)}
          >
            <img
              className='pictogramZoom shadow-md rounded-lg'
              alt={'pictogramZoom'}
              src={pictogramZoomed}
              style={customStyleImage()}
              onClick={() => displayImageZoomed(null)}
            />
          </div>
        )}
      </>
    );
  }
}

function mapStateToProps({ pictogramZoomed }) {
  return {
    pictogramZoomed
  };
}

export default connect(mapStateToProps, actions)(PictogramZoomedComponent);
