import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { NO_IMAGE } from '../../utils/Constants';

class PictogramComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: this.props.data.image
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.handleImageErrored = this.handleImageErrored.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();

    if (this.state.image === NO_IMAGE) {
      return;
    }

    const { data, classColor, displayImageZoomed } = this.props;
    const element = document.querySelector(`.${classColor}`);
    const style = getComputedStyle(element);
    const elm = document.documentElement;

    elm.style.setProperty('--border-color', style.backgroundColor);

    displayImageZoomed(data.image);
  }

  handleImageErrored() {
    this.setState({
      image: NO_IMAGE
    });
  }

  render() {
    return (
      <div className='p-2'>
        <img
          onClick={this.clickHandler}
          src={this.state.image}
          alt={this.props.data.name}
          className='img-thumbnail pictogram'
          onError={this.handleImageErrored}
        />
      </div>
    );
  }
}

export default connect(null, actions)(PictogramComponent);
