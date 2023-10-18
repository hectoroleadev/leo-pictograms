import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import { AppRouter } from './router';
import { store } from './store/store';

const LeoPictogramApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default LeoPictogramApp;
