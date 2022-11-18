import React from 'react';
import ColorListComponent from './ColorListComponent';
import PictogramZoomedComponent from './PictogramZoomedComponent';
import createData, { CARTOON_LIST } from '../../utils/Constants';

const DashboardComponent = () => {
  function renderColorListComponent() {
    return CARTOON_LIST.map(({ datas, classColor, size }) => {
      return (
        <ColorListComponent
          key={datas}
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
