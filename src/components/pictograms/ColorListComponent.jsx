import React, { Component } from 'react';
import { connect } from 'react-redux';
import PictogramComponent from './PictogramComponent';

class ColorListComponent extends Component {
  render() {
    const { classColor, pictogramZoomed, datas } = this.props;
    const filter = pictogramZoomed ? 'blur(2px) opacity(.3)' : 'none';

    return (
      <div className={`rounded-lg mr-2 ${classColor}`} style={{ filter }}>
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
