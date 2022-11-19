import React from 'react';
import PictogramComponent from './PictogramComponent';
import { useSelector } from 'react-redux';

const ColorListComponent = ({ classColor, datas }) => {
  const pictogramZoomed = useSelector((state) => state.pictogramZoomed);
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

export default ColorListComponent;
