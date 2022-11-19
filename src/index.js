import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import LeoPictogramApp from './components/LeoPictogramApp';
import reducers from './reducers';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <LeoPictogramApp />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
