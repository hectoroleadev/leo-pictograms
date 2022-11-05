import React, { Component } from 'react';
import { connect } from 'react-redux';
import PictogramComponent from './PictogramComponent';

class ColorListComponent extends Component {
  render() {
    const { classColor, pictogramZoomed, datas } = this.props;
    const filter = pictogramZoomed ? 'blur(2px) opacity(.3)' : 'none';

    return (
      <div
        className={`col-sm-2 col-4 mb-2 rounded ps-0 ${classColor}`}
        style={{ filter }}>
        {datas.map(data => {
          return (
            <PictogramComponent
              data={data}
              key={data.id}
              classColor={classColor}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ pictogramZoomed }) {
  return {
    pictogramZoomed
  };
}

export default connect(mapStateToProps, null)(ColorListComponent);
