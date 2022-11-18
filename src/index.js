import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import LeoPictogramApp from './components/LeoPictogramApp';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeSc

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <LeoPictogramApp />
    </React.StrictMode>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
