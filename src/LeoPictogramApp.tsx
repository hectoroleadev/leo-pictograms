import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './style.css';
import { router } from './router';
import { store } from './store/store';
import { Suspense } from 'react';

const LeoPictogramApp = () => {
  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        }
      >
        <RouterProvider router={router()} />
      </Suspense>
    </Provider>
  );
};

export default LeoPictogramApp;
