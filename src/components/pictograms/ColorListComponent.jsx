import React from 'react';
import { connect } from 'react-redux';
import PictogramComponent from './PictogramComponent';

const ColorListComponent = ({ classColor, pictogramZoomed, datas }) => {
  const filter = pictogramZoomed ? 'blur(2px) opacity(.3)' : 'none';

  return (
    <div
      className={`col-sm-2 col-4 mb-2  ps-0 ${classColor}`}
      style={{ filter }}
    >
      {datas.map((data) => {
        return (
          <PictogramComponent
            key={data.id}
            data={data}
            classColor={classColor}
          />
        );
      })}
    </div>
  );
};

function mapStateToProps({ pictogramZoomed }) {
  return {
    pictogramZoomed,
  };
}

export default connect(mapStateToProps, null)(ColorListComponent);
