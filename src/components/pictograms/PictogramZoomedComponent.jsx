import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PictogramZoomedComponent extends Component {
  render() {
    const { pictogramZoomed, displayImageZoomed } = this.props;

    return (
      <>
        {pictogramZoomed && (
          <div
            className='d-flex justify-content-center modal'
            onClick={() => displayImageZoomed(null)}>
            <div className='align-self-center'>
              <img
                className='pictogramZoom shadow rounded img-fluid'
                alt={'pictogramZoom'}
                src={pictogramZoomed}
                onClick={() => displayImageZoomed(null)}
              />
            </div>
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
