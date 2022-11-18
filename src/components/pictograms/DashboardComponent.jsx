import React from 'react';
import ColorListComponent from './ColorListComponent';
import PictogramZoomedComponent from './PictogramZoomedComponent';
import createData, { COLOR_LIST } from '../../utils/Constants';

const DashboardComponent = () => {
  function renderColorListComponent() {
    return COLOR_LIST.map(({ datas, classColor, size }) => {
      return (
        <ColorListComponent
          key={classColor}
          datas={createData(datas, size)}
          classColor={classColor}
        />
      );
    });
  }

  return (
    <section className='row justify-content-center align-items-start mx-1'>
      <PictogramZoomedComponent />
      {renderColorListComponent()}
    </section>
  );
};

export default DashboardComponent;
