import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './css/App.css';
import { router } from './router';
import { store } from './store/store';
import { Suspense } from 'react';

const LeoPictogramApp = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<span>Loading ...</span>}>
        <RouterProvider router={router()} />
      </Suspense>
    </Provider>
  );
};

export default LeoPictogramApp;
