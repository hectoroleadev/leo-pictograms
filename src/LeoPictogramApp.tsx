import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './css/App.css';
import { router } from './router';
import { store } from './store/store';

const LeoPictogramApp = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default LeoPictogramApp;
